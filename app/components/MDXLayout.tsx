import TableOfContents from './TableOfContents';

interface MDXLayoutProps {
  children: React.ReactNode;
}

export default function MDXLayout({ children }: MDXLayoutProps) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        {children}
      </div>
      <TableOfContents />
    </div>
  );
}