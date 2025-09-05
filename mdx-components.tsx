import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

// Helper function to generate heading IDs
const generateHeadingId = (children: React.ReactNode): string => {
  const text = typeof children === 'string' ? children : 
    React.Children.toArray(children).join('');
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

// Wrapper component for MDX content
function MDXWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="content-wrapper">
      <div className="article-content">
        {children}
      </div>
    </div>
  );
}

const components = {
  // Custom wrapper component to apply content styles
  wrapper: MDXWrapper,
  
  h1: (props: HeadingProps) => {
    const id = props.id || (props.children ? generateHeadingId(props.children) : '');
    return <h1 {...props} id={id} />;
  },
  h2: (props: HeadingProps) => {
    const id = props.id || (props.children ? generateHeadingId(props.children) : '');
    return <h2 {...props} id={id} />;
  },
  h3: (props: HeadingProps) => {
    const id = props.id || (props.children ? generateHeadingId(props.children) : '');
    return <h3 {...props} id={id} />;
  },
  h4: (props: HeadingProps) => {
    const id = props.id || (props.children ? generateHeadingId(props.children) : '');
    return <h4 {...props} id={id} />;
  },
  h5: (props: HeadingProps) => {
    const id = props.id || (props.children ? generateHeadingId(props.children) : '');
    return <h5 {...props} id={id} />;
  },
  h6: (props: HeadingProps) => {
    const id = props.id || (props.children ? generateHeadingId(props.children) : '');
    return <h6 {...props} id={id} />;
  },
  p: (props: ParagraphProps) => <p {...props} />,
  ol: (props: ListProps) => <ol {...props} />,
  ul: (props: ListProps) => <ul {...props} />,
  li: (props: ListItemProps) => <li {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => <em {...props} />,
  strong: (props: ComponentPropsWithoutRef<'strong'>) => <strong {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  table: (props: ComponentPropsWithoutRef<'table'>) => <table {...props} />,
  thead: (props: ComponentPropsWithoutRef<'thead'>) => <thead {...props} />,
  tbody: (props: ComponentPropsWithoutRef<'tbody'>) => <tbody {...props} />,
  tr: (props: ComponentPropsWithoutRef<'tr'>) => <tr {...props} />,
  th: (props: ComponentPropsWithoutRef<'th'>) => <th {...props} />,
  td: (props: ComponentPropsWithoutRef<'td'>) => <td {...props} />,
  blockquote: (props: BlockquoteProps) => <blockquote {...props} />,
  hr: (props: ComponentPropsWithoutRef<'hr'>) => <hr {...props} />,
  img: (props: ComponentPropsWithoutRef<'img'>) => <img {...props} />,
  // Custom components for paddle reviews
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
