export interface GeoLocation {
  country: string;
  countryCode: string;
  region: string;
  ip: string;
}

export interface PricingTier {
  name: string;
  region: string;
  currency: string;
  starter: number;
  medium: number;
  premium: number;
  enterprise: number;
}

export const PRICING_TIERS: Record<string, PricingTier> = {
  IN: {
    name: 'India',
    region: 'IN',
    currency: '₹',
    starter: 2499,
    medium: 4999,
    premium: 12999,
    enterprise: 24999,
  },
  AE: {
    name: 'UAE',
    region: 'AE', 
    currency: 'AED',
    starter: 199,
    medium: 399,
    premium: 999,
    enterprise: 1999,
  },
  default: {
    name: 'International',
    region: 'INTL',
    currency: '$',
    starter: 50,
    medium: 100,
    premium: 350,
    enterprise: 699,
  },
};

export async function detectGeoLocation(): Promise<GeoLocation> {
  try {
    // First try ipapi.co (free tier, no API key required)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return {
        country: data.country_name,
        countryCode: data.country_code,
        region: data.region,
        ip: data.ip,
      };
    }
  } catch (error) {
    console.warn('Primary geo detection failed:', error);
  }

  try {
    // Fallback to ipinfo.io
    const response = await fetch('https://ipinfo.io/json');
    
    if (response.ok) {
      const data = await response.json();
      return {
        country: data.country,
        countryCode: data.country,
        region: data.region,
        ip: data.ip,
      };
    }
  } catch (error) {
    console.warn('Fallback geo detection failed:', error);
  }

  // Ultimate fallback - return default
  return {
    country: 'Unknown',
    countryCode: 'US',
    region: 'Unknown',
    ip: 'Unknown',
  };
}

export function getPricingForRegion(countryCode: string): PricingTier {
  if (countryCode === 'IN') {
    return PRICING_TIERS.IN;
  }
  if (countryCode === 'AE') {
    return PRICING_TIERS.AE;
  }
  return PRICING_TIERS.default;
}

export function formatPrice(amount: number, currency: string): string {
  return `${currency}${amount.toLocaleString()}`;
}