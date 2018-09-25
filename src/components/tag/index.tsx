import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #fefefe;
`;

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
  'Node.js': '#026D00',
  AVA: '#0B1749',
  markdown: '#000000',
  Electron: '#9FEAF9'
};

const StyledSpan = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: ${props => spanColor[props.title]};
  border-radius: 50%;
  margin-right: 4px;
`;

interface TagProps {
  title: TitleEnum
}

interface TagState { }

export default class Tag extends React.Component<TagProps, TagState> {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <StyledTag>
        <StyledSpan title={title}></StyledSpan>
        {title}
      </StyledTag>
    );
  }
}

enum TitleEnum {
  'JavaScript',
  'TypeScript',
  'React',
  'MobX',
  'Parcel',
  'PostCSS',
  'GraphQL',
  'Koa',
  'mongoose',
  'Passport',
  'Angular',
  'Apollo',
  'RxJS',
  'Webpack',
  'Redux',
  'Grunt',
  'RequireJS',
  'SCSS',
  'Node.js',
  'AVA',
  'markdown',
  'Electron'
};
