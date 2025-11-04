import { Coffee, Egg, UtensilsCrossed } from 'lucide-react';

const basePath = '/scottys-on-the-strand';

export default function BreakfastMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen md:min-h-[60vh] flex items-center pt-[60px]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${basePath}/videos/breakfast-background.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <Coffee className="w-12 h-12 text-sand-100" />
            <h1 className="text-6xl md:text-8xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              Breakfast Menu
            </h1>
            <Egg className="w-12 h-12 text-sand-100" />
          </div>
          <p className="text-2xl md:text-3xl text-sand-100 font-medium max-w-3xl mx-auto" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Served until 3:00 PM
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Omelettes Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ocean-600 mb-2 flex items-center justify-center gap-2">
              <UtensilsCrossed className="w-7 h-7 text-orange-500" />
              Signature Omelettes
            </h2>
          </div>
          <p className="text-center text-slate-700 mb-3 text-lg max-w-3xl mx-auto">
            All omelettes made with 3 eggs, served with home fries or fresh fruit, and your choice of toast or muffins
          </p>
          <p className="text-center text-slate-600 mb-10 text-sm italic">
            Egg substitute or egg whites add $1.75
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Western</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Ham, bell peppers, onions, and cheddar cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Spanish</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Salsa, jalapeños, onions, and jack cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Greek</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Feta cheese, spinach, tomatoes, and onions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Italian</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Italian sausage, marinara, and mozzarella cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Denver</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Ham, bell peppers, onions, and cheddar cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Vegetarian</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Mushrooms, tomatoes, onions, bell peppers, and jack cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Mushroom & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Fresh mushrooms and your choice of cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Avocado & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Fresh avocado and your choice of cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">California</h3>
                <span className="text-lg font-bold text-amber-500">$14.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Avocado, bacon, tomatoes, and swiss cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Bacon & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Crispy bacon and your choice of cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Ham & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Smoked ham and your choice of cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Sausage & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Country sausage and your choice of cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Spinach & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Fresh spinach and your choice of cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Lox & Onion</h3>
                <span className="text-lg font-bold text-amber-500">$14.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Smoked salmon, onions, and cream cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Meat Lover's</h3>
                <span className="text-lg font-bold text-amber-500">$14.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Bacon, ham, sausage, and cheddar cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Joe's Special</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Ground beef, spinach, mushrooms, and onions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Farmer's</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Bacon, sausage, ham, bell peppers, onions, and cheddar</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Ortega</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Ortega chiles and jack cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Chili & Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Homemade chili and cheddar cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Crab</h3>
                <span className="text-lg font-bold text-amber-500">$16.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Fresh crab meat, avocado, and swiss cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Build Your Own</h3>
                <span className="text-lg font-bold text-amber-500">$11.95+</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Choose up to 4 ingredients from our selection</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Plain Cheese</h3>
                <span className="text-lg font-bold text-amber-500">$11.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Your choice of cheese</p>
            </div>
          </div>
        </section>

        {/* Eggs & Tony's Specials Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ocean-600 mb-2">
              Eggs & Tony's Specials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Two Eggs Any Style</h3>
                <span className="text-lg font-bold text-amber-500">$9.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Served with home fries or fresh fruit, and toast or muffins</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Two Eggs with Bacon</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Two eggs any style with crispy bacon strips</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Two Eggs with Sausage</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Two eggs any style with country sausage links</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Two Eggs with Ham</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Two eggs any style with grilled smoked ham</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Mexican Scramble</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Scrambled eggs with chorizo, jalapeños, onions, tomatoes, salsa, and jack cheese. Served with home fries and tortillas</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Fiesta Burrito</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Scrambled eggs, chorizo, home fries, jack cheese, salsa, and sour cream wrapped in a warm flour tortilla</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Chilaquiles</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Crispy tortilla chips simmered in salsa verde or roja, topped with two eggs, queso fresco, sour cream, and onions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Huevos Rancheros</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Two eggs over medium on corn tortillas, topped with ranchero sauce and jack cheese. Served with refried beans and home fries</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Eggs Benedict</h3>
                <span className="text-lg font-bold text-amber-500">$14.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce. Served with home fries or fresh fruit</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Eggs Florentine</h3>
                <span className="text-lg font-bold text-amber-500">$14.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Poached eggs and sautéed spinach on an English muffin, topped with hollandaise sauce. Served with home fries or fresh fruit</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Tony's Special</h3>
                <span className="text-lg font-bold text-amber-500">$15.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three eggs scrambled with bacon, sausage, mushrooms, onions, bell peppers, tomatoes, and cheddar cheese. Served with home fries and toast</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Buenos Dias Quesadilla</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Scrambled eggs, bacon, jack cheese, and avocado in a grilled flour tortilla. Served with salsa and sour cream</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Potato Pancakes</h3>
                <span className="text-lg font-bold text-amber-500">$13.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three golden potato pancakes served with two eggs any style, sour cream, and applesauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Country Breakfast</h3>
                <span className="text-lg font-bold text-amber-500">$14.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Two eggs any style, two bacon strips, two sausage links, home fries, and your choice of two buttermilk pancakes or French toast</p>
            </div>
          </div>
        </section>

        {/* Pancakes & French Toast Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ocean-600 mb-2">
              Pancakes & French Toast
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Buttermilk Pancakes (Short Flip)</h3>
                <span className="text-lg font-bold text-amber-500">$8.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Two fluffy buttermilk pancakes served with butter and syrup</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Buttermilk Pancakes (Full Flip)</h3>
                <span className="text-lg font-bold text-amber-500">$10.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three fluffy buttermilk pancakes served with butter and syrup</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Blueberry Pancakes</h3>
                <span className="text-lg font-bold text-amber-500">$11.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three buttermilk pancakes loaded with fresh blueberries</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Chocolate Chip Pancakes</h3>
                <span className="text-lg font-bold text-amber-500">$11.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three buttermilk pancakes with chocolate chips</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Banana Nut Pancakes</h3>
                <span className="text-lg font-bold text-amber-500">$11.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three buttermilk pancakes with fresh bananas and walnuts</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">French Toast</h3>
                <span className="text-lg font-bold text-amber-500">$10.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">Three thick slices of egg bread grilled golden brown, dusted with powdered sugar</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Crunch French Toast</h3>
                <span className="text-lg font-bold text-amber-500">$11.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">French toast coated with crunchy corn flakes, dusted with powdered sugar</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">Strawberry French Toast</h3>
                <span className="text-lg font-bold text-amber-500">$12.95</span>
              </div>
              <p className="text-slate-600 leading-relaxed">French toast topped with fresh strawberries and whipped cream</p>
            </div>
          </div>
        </section>

        {/* Breakfast Sides Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ocean-600 mb-2">
              Breakfast Sides
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Bacon (4 strips)</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Sausage Links (4)</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Sausage Patties (2)</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Ham Steak</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Canadian Bacon</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Chorizo</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Fresh Fruit</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Home Fries</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Hash Browns</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Oatmeal</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Toast</h3>
                <span className="font-bold text-orange-500">$2.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">English Muffin</h3>
                <span className="font-bold text-orange-500">$2.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Muffins</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Bagel & Cream Cheese</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">One Egg</h3>
                <span className="font-bold text-orange-500">$2.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Two Eggs</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>
          </div>
        </section>

        {/* Beverages Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ocean-600 mb-2 flex items-center justify-center gap-2">
              <Coffee className="w-7 h-7 text-amber-600" />
              Beverages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Coffee</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Decaf Coffee</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Hot Tea</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Iced Tea</h3>
                <span className="font-bold text-orange-500">$3.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Hot Chocolate</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Orange Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Apple Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Cranberry Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Grapefruit Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Tomato Juice</h3>
                <span className="font-bold text-orange-500">$4.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Milk</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Chocolate Milk</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Soft Drinks</h3>
                <span className="font-bold text-orange-500">$3.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-slate-700">Lemonade</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <div className="bg-slate-100 rounded-lg p-8 text-center border-2 border-ocean-500/20">
          <p className="text-slate-700 mb-3 text-lg">
            <span className="font-semibold">Substitutions:</span> Egg whites or egg substitute available for an additional $1.75
          </p>
          <p className="text-slate-700 mb-3 text-lg">
            <span className="font-semibold">Gluten-free options available</span> upon request
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-slate-600 text-sm italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness
          </p>
        </div>
      </div>
    </div>
  );
}
