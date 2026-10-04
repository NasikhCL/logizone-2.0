import { useEffect } from 'react';

export default function Seo({ title, description, keywords, path = '/' }) {
  useEffect(() => {
    if (!document) return;

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://logizonefreight.com';
    const pageUrl = `${baseUrl}${path}`;

    document.title = title;

    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords || '');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', pageUrl, 'property');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:card', 'summary_large_image', 'name');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [title, description, keywords, path]);

  return null;
}
