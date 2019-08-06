import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import '../../assets/scss/home/categoryBlock.scss'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'

class CategoryBlock extends React.Component {
    
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container-horizontal-a',{
            slidesPerView : 3,
            centeredSlides : false,
            })
    }
    render(){
        
        return (
            <>{
                this.props.FloorShow.map((v,i)=>{
                    const [data1] = v.list.slice(0,1)
                    const data2 = v.list.slice(1)
                    return (
                        <div key={i} className={'category-block__list'}>
                            <div className={'category-block__list__wrap'}>
                                <h3 className={'category-block__list__wrap__title'}>{v.title}</h3>
                                <NavLink className={'category-block__list__wrap__arrow'} to={'null'}>
                                    <img src={''} alt='' />
                                </NavLink>
                            </div>
                            <div className={'category-block__list__row'}>
                                <div className={'row--bg'}>
                                    <NavLink className={"category-block__list__row__wrap"} to={'null'}>
                                        <div className={'category-block__list__row__item'}>
                                            <img src={data1.pic} alt='' />
                                            <div className={'juooo_sponsor'}  dangerouslySetInnerHTML={{__html: data1.ico}}>
                                                
                                            </div>
                                        </div>
                                        <div className={'category-block__list__row__info'}>
                                            <p className={'category-block__list__row__info__date'}>
                                                <strong>{data1.date}</strong>
                                                <span>{data1.week}</span>
                                            </p>
                                            <h3 className={'category-block__list__row__info__title text-double'}>
                                                {data1.schedular_name}
                                            </h3>
                                            <p className={'category-block__list__row__info__venue text-single'}>
                                                {data1.city_name +' | '+data1.venue_name}
                                            </p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className={'category-block__list__column'}>
                                <div className="swiper-container swiper-container-horizontal-a">
                                    <div className="swiper-wrapper caterory-swiper-wrapper">
                                        {
                                            data2.map((item,n)=>{
                                                return (
                                                    <div key={n+5} className="swiper-slide swiper-slide-active-ccc ">
                                                        <NavLink className={'category-block__list__column__wrap'} to={'null'}>
                                                            <div className={'category-block__list__column__item'}>
                                                                <img src={item.pic} alt='' />
                                                                <div dangerouslySetInnerHTML={{__html: item.ico}}></div>
                                                            </div>
                                                            <h3 className={"category-block__list__column__title text-single"}>
                                                                {
                                                                    item.schedular_name
                                                                }
                                                            </h3>
                                                            <p className={"category-block__list__column__price"}>
                                                                <strong>{item.low_price}</strong>
                                                                <span>起</span>
                                                            </p>
                                                        </NavLink>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>   

                    )
                })
            }
            </>
           
        )
    }
}

export default CategoryBlock