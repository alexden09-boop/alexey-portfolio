// Keep the original site’s paths and query parameters inside this GitHub Pages edition.
(() => {
  const entry = new URL('./', location.href);
  window.projectURL = value => {
    if (typeof value !== 'string' || !/^(?:\/(?!\/)|https?:\/\/)/.test(value)) return value;
    const target = new URL(value, location.origin);
    if (target.origin !== location.origin || target.pathname.startsWith(entry.pathname)) return value;
    const destination = new URL(entry);
    destination.search = target.search;
    destination.hash = target.hash;
    if (target.pathname !== '/') destination.searchParams.set('route', target.pathname);
    return destination.href;
  };
  function adapt(link) {
    const href = link.getAttribute('href');
    if (href?.startsWith('/') && !href.startsWith('//')) link.setAttribute('href', window.projectURL(href));
  }
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') adapt(record.target);
      for (const node of record.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.matches('a[href^="/"]')) adapt(node);
        node.querySelectorAll('a[href^="/"]').forEach(adapt);
      }
    }
  });
  observer.observe(document.documentElement, {childList: true, subtree: true, attributes: true, attributeFilter: ['href']});
})();
