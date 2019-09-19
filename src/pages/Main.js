import React from 'react';

import style from '../scss/Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.list = [
      {
        id: 1,
        name: '세계과자할인점',
        tags: ['과자', '디저트'],
      },
      {
        id: 2,
        name: '라하노카레',
        tags: ['일식', '카레'],
        description: '오후 12시 이전에 오면 계란후라이 혹은 고로케 서비스',
      },
    ];
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
                this.list.length && this.list.map(item => (
                  <tr key={item.id}>
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
