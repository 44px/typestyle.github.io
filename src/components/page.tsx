/**
 * components used to setup the demo page 
 */
import { style } from 'typestyle';
import * as csx from 'typestyle/csx';
import * as React from 'react';
import * as gls from './gls';
import { colors, fontSizes } from './styles';
import * as txt from './txt';

namespace HeaderStyles {
  export const root = style(
    csx.centerCenter,
    csx.padding(50, 0),
    {
      backgroundColor: colors.header,
      color: 'white'
    });
  export const anchor = style({
    color: colors.text,
    textDecoration: 'none',
    '&:hover': {
      color: colors.text,
      textDecoration: 'underline'
    }
  })
}

export const Header = () => {
  return (
    <div className={HeaderStyles.root}>
      <div className={style(csx.content, csx.vertical, csx.verticallySpaced(24))}>
        <h1 className={style(csx.fontStyleItalic)}>TypeStyle</h1>
        <p>Making CSS TypeSafe</p>
      </div>
    </div>
  );
}

type PageSectionProps = {
  title: string, 
  link: string,
  children?: React.ReactNode
}
export const PageSection = ({title, link, children}: PageSectionProps) => {
  return <gls.ContentVerticalMargined margin={15}>
    <a className={HeaderStyles.anchor} title="Permalink" href={"#/"+link}><txt.H2 id={link}>{title}</txt.H2></a>
    <div className={style(csx.verticallySpaced(10), csx.content, csx.vertical)}>
      {children}
    </div>
  </gls.ContentVerticalMargined>
}