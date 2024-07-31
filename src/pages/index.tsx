import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import nonggan from "../assets/images/nonggan.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน<br /> 
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย<br /> 
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things <br /> และ นายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้<br /> 
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-center mt-8">
          ปัจจุบันค่าเฟ่ และห้องสมุดของเรา อยู่ในช่วงการดูแลของ ....
          {/* TODO: ชื่อของตนเอง, รหัสประจำตัวนักศึกษา และแนะนำคาเฟ่นี้ต่ออีกสักหน่อย + ใส่รูปของตนเอง (ไม่จำเป็นหากไม่สะดวกใจใส่รูป) */}
          ณกาล พลบุญ 65070058<br /><br />{" "}
          <b>
            ร้านกาแฟนี้อาจจะไม่สวยมาก แต่ว่าผู้ดูแลร้านในช่วงนี้สวยมากแน่นอนค่ะ ถ้าสวยหมดมันจะเพอร์เฟคเกินไป อุวะฮ๊ะฮ่า<br /><br />
          </b>{" "}
          
          ในโลกที่ร้านกาแฟเต็มไปด้วยความหลากหลาย การค้นหาความพิเศษและความสนุกในร้านกาแฟไม่ใช่เรื่องง่าย<br />  
          แต่ถ้าคุณ และ คุณ และคุณเท่านั้นที่ทำให้ใจผมหยุดเหงา ต้องการความแตกต่างและเสียงหัวเราะในทุกแก้วของกาแฟที่คุณดื่ม<br /> 
          นี่แหละๆ นี่แหละใช่เลย ร้านกาแฟที่แปลกใหม่ ที่นี่คุณจะได้พบกับกาแฟที่ไม่เหมือนใครพร้อมกับบรรยากาศที่ทำให้คุณหัวเราะได้ตลอดทั้งวัน!<br /> 
          เมนูยอดฮิต "คาปูชิโน่โชว์ยิ้ม เพิ่มความสดใสทุกครั้งที่ดื่ม" ร้านเราจุดเด่นก็คงเป็นเรื่องน้ำแข็งที่เย็นทุกก้อน
          ขอถ้าให้ลอง <br />ด้วยนโยบายสำคัญของร้าน "ไม่เสียวฟันไม่ให้ออกจากร้าน" อาจจะไม่ตลกแล้ว  
          เริ่มจนมุม เอาเป็นว่า มาลองให้รู้ดีกว่า อุว้ากฮ๊ากฮ๊ะอ๊าาาฮ่า
        </p>
      </section>

      <section className="flex justify-center items-center">
      <img src={nonggan} alt="Coffee" className="w-96 h-auto rounded-lg shadow-lg" />
      </section>
    </Layout>
  );
}

