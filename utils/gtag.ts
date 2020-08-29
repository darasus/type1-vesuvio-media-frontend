export const pageview = (url: string) => {
  (window as any).gtag('config', process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
