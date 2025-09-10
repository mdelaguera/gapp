// Affiliate link utilities for Get A Pickleball Paddle

export interface AffiliatePartner {
  name: string;
  baseUrl: string;
  affiliateCode: string;
  promoText?: string;
}

export const affiliatePartners: Record<string, AffiliatePartner> = {
  pickleballSuperstore: {
    name: 'Pickleball Superstore',
    baseUrl: 'https://pickleballsuperstore.com',
    affiliateCode: 'discount/Michael-111480',
    promoText: 'Save 10%'
  },
  justPaddles: {
    name: 'Just Paddles',
    baseUrl: 'https://www.justpaddles.com',
    affiliateCode: '?rfsn=8822572.83ad29',
    promoText: 'Exclusive Deals'
  },
  amazon: {
    name: 'Amazon',
    baseUrl: 'https://amazon.com',
    affiliateCode: 'tag=getapaddle-20',
    promoText: 'Prime Shipping'
  }
};

export function buildAffiliateLink(partner: keyof typeof affiliatePartners, productPath?: string): string {
  const partnerInfo = affiliatePartners[partner];
  if (!partnerInfo) {
    throw new Error(`Unknown affiliate partner: ${partner}`);
  }

  const { baseUrl, affiliateCode } = partnerInfo;
  
  if (partner === 'pickleballSuperstore') {
    return `${baseUrl}/${affiliateCode}`;
  } else if (partner === 'justPaddles') {
    if (productPath) {
      return `${baseUrl}/${productPath}${affiliateCode}`;
    }
    return `${baseUrl}/${affiliateCode}`;
  } else if (partner === 'amazon' && productPath) {
    return `${baseUrl}/${productPath}?${affiliateCode}`;
  }
  
  return `${baseUrl}${productPath ? `/${productPath}` : ''}`;
}

export function getPartnerPromoText(partner: keyof typeof affiliatePartners): string {
  return affiliatePartners[partner]?.promoText || 'Shop Now';
}