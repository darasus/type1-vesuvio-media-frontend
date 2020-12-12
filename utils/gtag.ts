export const pageview = (url: URL) => {
  if (process.env.NODE_ENV === 'production') {
    (window as any).gtag('config', process.env.GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: string | number;
}) => {
  if (process.env.NODE_ENV === 'production') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
