import * as React from 'react'
import styled from 'styled-components'

const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
`

const spanColor = {
  JavaScript: '#EFDE6D',
  TypeScript: '#327487',
  React: '#6BDBF7',
  MobX: '#E36432',
  Parcel: '#BA444D',
  PostCSS: '#D93D27',
  GraphQL: '#DC2396',
  Koa: '#33333D',
  mongoose: '#840610',
  Passport: '#49DB80',
  Angular: '#D9143C',
  Apollo: '#241B7D',
  RxJS: '#CD208D',
  Webpack: '#5EA9D9',
  Redux: '#7651B5',
  Grunt: '#E08545',
  RequireJS: '#398AD6',
  SCSS: '#CB6899',
  Nodejs: '#026D00',
  AVA: '#0B1749',
  markdown: '#000000',
  Electron: '#9FEAF9',
  Jest: '#99424F',
  Less: '#1D365D',
  Rollup: '#EE3234'
}

const StyledSpan = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: ${(props): string => spanColor[props.title]};
  border-radius: 50%;
  margin-right: 4px;
`

interface TagProps {
  title: TagTitleEnum;
}

export default function Tag (props: TagProps): React.ReactElement {
  return (
    <StyledTag>
      <StyledSpan title={props.title}></StyledSpan>
      {props.title}
    </StyledTag >
  )
}

export enum TagTitleEnum {
  JavaScript='JavaScript',
  TypeScript='TypeScript',
  React='React',
  MobX='MobX',
  Parcel='Parcel',
  PostCSS='PostCSS',
  GraphQL='GraphQL',
  Koa='Koa',
  mongoose='mongoose',
  Passport='Passport',
  Angular='Angular',
  Apollo='Apollo',
  RxJS='RxJS',
  Webpack='Webpack',
  Redux='Redux',
  Grunt='Grunt',
  RequireJS='RequireJS',
  SCSS='SCSS',
  Nodejs='Nodejs',
  AVA='AVA',
  markdown='markdown',
  Electron='Electron',
  Less='Less',
  Jest='Jest',
  Rollup='Rollup',
};
