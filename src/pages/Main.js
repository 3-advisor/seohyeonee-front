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
        <h2 className={style.pageTitle}>서현 음식점 리스트</h2>
        <div className={style.food}>
          <table className={style.foodTable}>
            <thead>
              <tr>
                <th className={style.foodTableTitle}>이름</th>
                <th className={style.foodTableTitle}>태그</th>
                <th className={style.foodTableTitle}>설명</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.list.length > 0 && this.state.list.map(item => (
                  <tr key={item._id}>
                    <td className={style.foodTableContent}>{item.name}</td>
                    <td className={style.foodTableContent}>
                      {
                        item.tags.length && item.tags.map(tag => (
                          <span key={tag} className={style.tag}>#{tag}</span>
                        ))
                      }
                    </td>
                    <td className={style.foodTableContent}>{item.description}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Main;
