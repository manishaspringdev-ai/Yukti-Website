import { useState, useEffect } from 'react';
import { SiteDataService } from '../services/dataService';

export function useSiteData() {
  const [data, setData] = useState(() => SiteDataService.getSiteData());
  const [inquiries, setInquiries] = useState(() => SiteDataService.getInquiries());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const syncData = () => {
      setData(SiteDataService.getSiteData());
      setInquiries(SiteDataService.getInquiries());
    };

    window.addEventListener('yukti_site_data_updated', syncData);
    window.addEventListener('storage', syncData);

    return () => {
      window.removeEventListener('yukti_site_data_updated', syncData);
      window.removeEventListener('storage', syncData);
    };
  }, []);

  return { data, inquiries, loading, refresh: () => setData(SiteDataService.getSiteData()) };
}
