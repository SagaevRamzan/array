


function App() {

const arr_map=[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2];
const arr_filter=[
    { a: 2, b: 12 },
    { a: 0.1, b: 0.1 },
    { a: 0, b: 1 },
    { a: 100, b: 1000 },
    { a: 4, b: 4 }
    ];

    const arr_map_new=arr_map.map(item=>{
    if(item<0){
        return (item=0);
    }
    return item
})
    const arr_filter_new=arr_filter.filter(item=>{
        if(item.a===item.b){return false}
        return true
    })

    const arr_summ=arr_filter.filter(item=>{
        if(item.a===item.b){
            return true
        }

    })
  return (
    <div className="App">
        <div className="header"><b>Задания</b></div>
      <div className="content">

            <div className="first_zadan">
                <div className="text">Замени все отрицательные числа
                    Есть массив из чисел `[2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]`.<br/>
                    Напиши код, который все отрицательные значения элементов массива заменит на нолик.<br/>
                    В итоге должно получиться: `[2, 0, 0.1, 0, 0, 0, 0, 0, 0.3, 0.003, 2]`,<br/>
                    <br/>
                    "Искомый массив:"
                </div>
                <div>
                    {arr_map_new.map(item=>{
                    return <b> {item},</b>
                    })}
                </div>
                <div>
                    <b>Использован метод массива map</b>
                </div>
            </div>
            <div className="two_zadan">
                <div className="text">Избавляемся от близнецов
                    Дан массив из объектов:
                    `const elements = [
                    <>{" a: 2, b: 12 "}"</>,
                    <>{" a: 0.1, b: 0.1 "}"</>,
                    <>{" a: 0, b: 1 "}"</>,
                    <>{" a: 100, b: 1000 "}"</>,
                    <>{" a: 4, b: 4 "}"</>
                    ];

                    Обработай массив так, чтобы в итоге остались только те элементы, у которых значения свойств `a` и `b` не совпадают.<br/>
                    <br/>
                    "Искомый массив:"
                </div>
                <div>
                    {arr_filter_new.map(item=>{
                        return <b>{item.a}:{item.b}, </b>
                    }
                    )
                        }
                </div>
                <div>
                    <b>Использован метод массива filter</b>
                </div>
            </div>
            <div className="tree_zadan">
                        <div className="text">Избавляемся от близнецов
                            Дан массив из объектов:
                            `const elements = [
                            <>{" a: 2, b: 12 "}"</>,
                            <>{" a: 0.1, b: 0.1 "}"</>,
                            <>{" a: 0, b: 1 "}"</>,
                            <>{" a: 100, b: 1000 "}"</>,
                            <>{" a: 4, b: 4 "}"</>
                            ];

                            найди какого-нибудь близнеца (объекта, у которого значения обеих свойств равны) и вернет сумму этих значений<br/>
                            <br/>
                            "Искомый массив:"
                        </div>
                        <div>
                                {arr_summ.map(item=>{
                                    return <b>{item.a+item.b}, </b>
                                })}
                        </div>
                        <div>
                                <b>Использован метод массива filter</b>
                        </div>
            </div>
      </div>
    </div>
  );
}

export default App;
