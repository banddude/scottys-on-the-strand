import Image from 'next/image';
import { Sunset, Coffee } from 'lucide-react';

const basePath = process.env.NODE_ENV === 'production' ? '/scottys-on-the-strand' : '';

export default function SunsetSpecials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 pt-[60px]">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Sunset className="w-10 h-10 text-orange-500" />
            <h1 className="text-6xl font-bold text-orange-600">
              Sunset Specials
            </h1>
          </div>
          <p className="text-2xl text-ocean-600 font-semibold mb-2">
            4:30 PM to 9:30 PM
          </p>
          <p className="text-lg text-slate-600 italic">
            Not Valid on Holidays
          </p>
        </div>

        {/* Special Dinner Deals */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Spaghetti Special */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-4 border-orange-500/20">
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-ocean-100">
                <Image
                  src={`${basePath}/images/menu/pasta.gif`}
                  alt="All You Can Eat Spaghetti"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl font-bold">$9.95</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                  Spaghetti
                  <span className="ml-3 text-orange-500 text-sm bg-orange-100 px-3 py-1 rounded-full">
                    ALL YOU CAN EAT
                  </span>
                </h3>
                <p className="text-slate-700 text-lg mb-3">
                  All you can eat with meat sauce, dinner salad & garlic bread
                </p>
                <p className="text-sm text-slate-600 italic bg-slate-50 p-3 rounded-lg border-l-4 border-orange-500">
                  (Sorry, NO DOGGY BAGS)
                </p>
              </div>
            </div>

            {/* Chef's Special */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-4 border-orange-500/20">
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-ocean-100">
                <Image
                  src={`${basePath}/images/menu/sunset1.jpg`}
                  alt="Chef's Special"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-2xl font-bold">Market Price</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                  Chef's Special
                  <span className="ml-3 text-orange-500 text-sm bg-orange-100 px-3 py-1 rounded-full">
                    CHANGES DAILY
                  </span>
                </h3>
                <p className="text-slate-700 text-lg mb-3">
                  Served with mashed or baked potato, sautéed vegetables, dinner salad & garlic bread
                </p>
                <p className="text-sm text-orange-600 font-semibold bg-orange-50 p-3 rounded-lg">
                  Ask your server about today's special!
                </p>
              </div>
            </div>

            {/* Roast Pork */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-4 border-orange-500/20">
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-ocean-100">
                <Image
                  src={`${basePath}/images/menu/pork-roast.jpg`}
                  alt="Roast Pork"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl font-bold">$9.95</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Roast Pork
                </h3>
                <p className="text-slate-700 text-lg">
                  Served with mashed or baked potato, sautéed vegetables, dinner salad & garlic bread
                </p>
              </div>
            </div>

            {/* Roasted Chicken */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-4 border-orange-500/20">
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-ocean-100">
                <Image
                  src={`${basePath}/images/menu/Roasted Chicken.jpg`}
                  alt="Roasted Chicken"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-3xl font-bold">$9.95</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  Roasted Chicken
                </h3>
                <p className="text-slate-700 text-lg">
                  Served with mashed or baked potato, sautéed vegetables, dinner salad & garlic bread
                </p>
              </div>
            </div>

            {/* Fish & Chips */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-4 border-orange-500/20 md:col-span-2">
              <div className="md:flex">
                <div className="relative md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-orange-100 to-ocean-100">
                  <Image
                    src={`${basePath}/images/menu/fishchips_1a.jpg`}
                    alt="Fish & Chips"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                    <span className="text-3xl font-bold">$15.95</span>
                  </div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    Fish & Chips
                  </h3>
                  <p className="text-slate-700 text-lg mb-3">
                    Served with dinner salad
                  </p>
                  <p className="text-sm text-slate-600 italic bg-slate-50 p-3 rounded-lg border-l-4 border-orange-500">
                    No Substitutions, Please
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beverages Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500 flex items-center gap-2">
            <Coffee className="w-8 h-8 text-amber-600" />
            Beverages
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Coffee</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Decaf Coffee</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Hot Tea</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Iced Tea</h3>
                <span className="font-bold text-orange-500">$3.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Hot Chocolate</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Orange Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Apple Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Cranberry Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Grapefruit Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Tomato Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Milk</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Chocolate Milk</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Soft Drinks</h3>
                <span className="font-bold text-orange-500">$3.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Lemonade</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>
          </div>
        </section>

        {/* Special Value Banner */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-ocean-500 text-white rounded-2xl p-8 text-center shadow-2xl mb-8">
          <h3 className="text-3xl font-bold mb-3">Unbeatable Value!</h3>
          <p className="text-xl mb-2">
            Enjoy our special dinner deals every evening from 4:30 PM to 9:30 PM
          </p>
          <p className="text-lg italic opacity-90">
            Perfect for families, date nights, or a delicious meal by the beach
          </p>
        </div>

        {/* Additional Notes */}
        <div className="bg-ocean-100 rounded-lg p-6 text-center border-2 border-orange-500/30">
          <p className="text-slate-600 text-sm italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness
          </p>
        </div>
      </div>
    </div>
  );
}
