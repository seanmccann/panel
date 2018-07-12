import React from 'react';
import { TableRow, TableFooter } from 'material-ui/Table';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';

import styles from './style.module.css';

export default class Pagination extends React.Component {
    render() {
      const { firstRowIndex, lastRowIndex, paginator } = this.props;
  
      return(
        <TableRow>
          <div>
            {firstRowIndex} - {lastRowIndex} of {paginator.count}
            <IconButton
              onClick={this.props.handleBackButtonClick}
              disabled={paginator.page === 1}
              aria-label="Previous Page"
            >
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton
              onClick={this.props.handleNextButtonClick}
              disabled={lastRowIndex >= paginator.count}
              aria-label="Next Page"
            >
              <KeyboardArrowRight />
            </IconButton>
          </div>
        </TableRow>
      ) 
    }
  }
  