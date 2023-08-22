import Image from 'next/image'
import creatineImage from './../assets/img/1.png'
import vovkaImage from './../assets/img/2.png'

export default function Home() {
  return (
    <main className='flex flex-col justify-center gap-5 max-md:text center'>
      <section className='w-full text-right max-md:text-center'>
        <div className="container mx-auto flex flex-row justify-between items-center max-md:flex-col">
          <div className="w-[30%] max-md:w-[100%] max-md:flex max-md:flex-row max-md:justify-center">
            <Image src={creatineImage} objectFit='cover' />
          </div>
          <div className="w-[60%] max-md:w-[95%] flex flex-col gap-3">
            <h2 className='font-semibold text-xl'>We create a masterpiece clothes</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolores quisquam itaque similique ducimus cum neque dignissimos eligendi recusandae nesciunt. Ratione magnam qui veritatis doloribus porro hic exercitationem molestias voluptatem.
            A exercitationem rem atque aliquid, veniam voluptas asperiores tenetur sed totam cumque, modi aspernatur nisi nulla laborum illo, suscipit eveniet fugit nihil? Corrupti sint laboriosam, quas cum possimus at minus.
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className="container mx-auto flex flex-row-reverse justify-between items-center max-md:flex-col max-md:text-center">
          <div className="w-[30%] max-md:w-[100%] max-md:flex max-md:flex-row max-md:justify-center">
            <Image src={vovkaImage} className='m-0'/>
          </div>
          <div className="w-[60%] max-md:w-[95%] flex flex-col gap-3 ">
            <h2 className='font-semibold text-xl'>You can choose any design</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolores quisquam itaque similique ducimus cum neque dignissimos eligendi recusandae nesciunt. Ratione magnam qui veritatis doloribus porro hic exercitationem molestias voluptatem.
            A exercitationem rem atque aliquid, veniam voluptas asperiores tenetur sed totam cumque, modi aspernatur nisi nulla laborum illo, suscipit eveniet fugit nihil? Corrupti sint laboriosam, quas cum possimus at minus.
          </div>
        </div>
      </section>
    </main>
  )
}
