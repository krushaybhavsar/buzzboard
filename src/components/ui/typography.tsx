export function TypographyH1(props: React.HTMLProps<HTMLHeadingElement>) {
  const styles = 'leading-[1.25] scroll-m-20 text-4xl font-recoleta text-primary ';
  return (
    <h1 {...props} className={styles + props.className}>
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: React.HTMLProps<HTMLHeadingElement>) {
  const styles = 'leading-[1.25] scroll-m-20 text-[40px] font-recoleta text-primary font-[400] ';
  return (
    <h2 {...props} className={styles + props.className}>
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: React.HTMLProps<HTMLHeadingElement>) {
  const styles = 'scroll-m-20 text-2xl font-normal font-recoleta text-primary ';
  return (
    <h3 {...props} className={styles + props.className}>
      {props.children}
    </h3>
  );
}

export function TypographyH4(props: React.HTMLProps<HTMLHeadingElement>) {
  const styles = 'scroll-m-20 text-xl font-normal font-recoleta text-primary ';
  return (
    <h4 {...props} className={styles + props.className}>
      {props.children}
    </h4>
  );
}

export function TypographyH5(props: React.HTMLProps<HTMLHeadingElement>) {
  const styles = 'scroll-m-20 text-lg font-recoleta text-primary ';
  return (
    <h5 {...props} className={styles + props.className}>
      {props.children}
    </h5>
  );
}

export function TypographyP(props: React.HTMLProps<HTMLHeadingElement>) {
  const styles = 'font-sofia text-lighter-text font-[300] text-[18px] leading-[1.5] ';
  return (
    <p {...props} className={styles + props.className}>
      {props.children}
    </p>
  );
}
