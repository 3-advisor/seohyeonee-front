import React from 'react';

import { api } from '../services/api';
import style from '../scss/Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.fetchRestaurantList();
  }

  fetchRestaurantList() {
    api.getAllRestaurant().then((result) => {
      this.setState({ list: result.data });
    });
  }

  render() {
    return (
      <>
        <div className={style.blockArea}>
          <button type="button" className={style.pickBlock}>PICK!</button>
          {
            this.state.list.length > 0 && this.state.list.map(item => (
              <div key={item._id} className={style.roundBlock}>
                <div className={style.roundBlockHead}>
                  <div className={style.roundBlockTitle}>
                    {item.name}
                  </div>
                  <div className={style.roundBlockTagArea}>
                    {
                      item.tags.length && item.tags.map(tag => (
                        <a key={tag} className={style.foodTag} href="#">#{tag}</a>
                      ))
                    }
                  </div>
                </div>
                {
                  item.description && (
                    <div className={style.roundBlockContent}>
                      <hr/>
                      {item.description}
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

export default Main;
