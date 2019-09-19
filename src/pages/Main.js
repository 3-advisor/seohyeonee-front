import React from 'react';

import style from '../scss/Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <tr>
                <td className={style.foodTableContent}>세계과자할인점</td>
                <td className={style.foodTableContent}>
                  <span className={style.tag}>#과자</span>
                  <span className={style.tag}>#디저트</span>
                </td>
                <td className={style.foodTableContent}>간판이 촌스럽다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Main;
