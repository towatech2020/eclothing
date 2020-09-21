import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...OtherSectionProps }) => {
      return <MenuItem key={id} {...OtherSectionProps} />;
    })}
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectDirectorySections,
  });

export default connect(mapStateToProps)(Directory);
