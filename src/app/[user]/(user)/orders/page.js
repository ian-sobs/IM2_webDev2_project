import OrderPage from "@/components/orderPage/orderDisplay";
import adminPageStyle from "@/app/admin/adminPageStyle";

export default function page(){
    const styleArr = Object.keys(adminPageStyle)
    let classStyle = ''
    for (const classnameStyle of styleArr){
        classStyle = classStyle + adminPageStyle[classnameStyle] + ' '
    }


    return( 
    <>
        <section className={classStyle}>
            <OrderPage></OrderPage>
        </section>
        
    </>
   )
}