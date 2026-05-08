import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const certificates = [
  "/certificates/aws.png",
  "/certificates/dasar ai.png",
  "/certificates/financial.png",
  "/certificates/fe.png",
  "/certificates/java.png",
  "/certificates/js.png",
  "/certificates/web.png",
  "/certificates/soft.png",
  "/certificates/logika.png",
  "/certificates/react.png",
  "/certificates/laravel.png",
  "/certificates/flutter.png",
  "/certificates/gemini.png",
  "/certificates/peserta.png",
  "/certificates/quarter.png",
  "/certificates/semi.png",
  "/certificates/k3.jpeg",
  "/certificates/ldks.jpeg",
  "/certificates/micro.png",
  "/certificates/myskill.png",
  "/certificates/kbof.png",
  "/certificates/igdx.png",
  "/certificates/bia.png",
  "/certificates/sertif.jpg",
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function Card({ image }) {
  return (
    <div className="w-full aspect-4/3 rounded-xl overflow-hidden shadow-md bg-white">
      <img
        src={image}
        alt="certificate"
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
}

export default function CardCarrousel() {
  const grouped = chunkArray(shuffleArray(certificates), 4);

  return (
    <Swiper
      modules={[FreeMode]}
      spaceBetween={20}
      slidesPerView={1}
      slidesPerGroup={1}
      freeMode={{
        enabled: true,
        momentum: true,
        momentumRatio: 0.5,
        momentumVelocityRatio: 0.5,
        momentumBounce: true,
        momentumBounceRatio: 1,
      }}
      grabCursor={true}
      simulateTouch={true}
      allowTouchMove={true}
      touchStartPreventDefault={false}
      touchMoveStopPropagation={false}
      touchRatio={1}
      touchAngle={45}
      resistance={true}
      resistanceRatio={0.85}
      speed={600}
      threshold={5}
      followFinger={true}
      longSwipes={true}
      longSwipesRatio={0.3}
      longSwipesMs={200}
      shortSwipes={true}
    >
      {grouped.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-4 gap-4">
            {group.map((item, i) => (
              <Card key={i} image={item} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}