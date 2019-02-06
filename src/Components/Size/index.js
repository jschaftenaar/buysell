import React from 'react';
import Content from '../Content';
import PositionBasics from '../../Containers/Size/PositionBasics';
import PositionPercentages from '../../Containers/Size/PositionPercentages';
import PositionTotal from '../../Containers/Size/PositionTotal';
import style from './Size.module.scss';
import PropTypes from 'prop-types';

const Size = ({
  onAdd,
  position
}) => {
  return (
    <Content title='Size Position'>
      <form onSubmit={(event) => onAdd(event, position)}>
        <div className="card-columns">
          <PositionBasics/>
          <PositionPercentages/>
          <PositionTotal/>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">Add Position</button>
          </div>
        </div>
      </form>
    </Content>
  );
}

Size.defaultProps = {
  onAdd: (event) => {},
  position: {
    type: '',
    ticker: '',
    price: '',
    profit: '',
    stoploss: '',
    shares: '',
    commissions: ''
  }
}

Size.propTypes = {
  onAdd: PropTypes.func,
  position: PropTypes.shape({
    type: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.string,
    profit: PropTypes.string,
    stoploss: PropTypes.string,
    shares: PropTypes.string,
    commissions: PropTypes.string
  })
};

export default Size;