import { Link } from "react-router-dom";

const Home = () => {
  const donations = [];

  return (
    <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-4xl font-bold dark:text-white text-center">Donation List</h2>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Nuevo</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Semi-nuevo</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://pm1.aminoapps.com/6931/0d9977e98160e3967ee915fbcaae0211db830bb7r1-567-519v2_hq.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Semi-nuevo</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://fofuxo.com.br/_upload/galleries/2013/09/04/problemas-ao-dar-bebida-alcoolica-para-os-cachorros-5227be24f1850.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Nuevo</p>
        </a>
  

      </div>
    </div>
  </div>
  );
};

export default Home;