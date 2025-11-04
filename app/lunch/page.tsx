import { Utensils, Pizza, Sandwich } from 'lucide-react';

const basePath = '/scottys-on-the-strand';

export default function LunchMenu() {
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
          <source src={`${basePath}/videos/lunch-background.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <Sandwich className="w-12 h-12 text-sand-100" />
            <h1 className="text-6xl md:text-8xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              Lunch Menu
            </h1>
            <Utensils className="w-12 h-12 text-sand-100" />
          </div>
          <p className="text-2xl md:text-3xl text-sand-100 font-medium max-w-3xl mx-auto" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Watch the world pass by on the Strand
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Sandwiches Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500">
            Sandwiches
          </h2>
          <p className="text-slate-700 mb-6 italic">
            All sandwiches served with your choice of fries or coleslaw
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Steak Sandwich</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Grilled USDA choice steak on a French roll with lettuce, tomato, and onions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Beachcomber</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Turkey, bacon, avocado, jack cheese, lettuce, tomato, and mayo on toasted sourdough</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Turkey Club</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted white bread</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">The Breakers</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Ham, turkey, swiss cheese, lettuce, tomato, and honey mustard on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">The Wave BLT</h3>
                <span className="text-lg font-bold text-orange-500">$12.95</span>
              </div>
              <p className="text-slate-600">Classic bacon, lettuce, and tomato on toasted sourdough</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Surfin' Bird</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Grilled chicken breast with bacon, avocado, lettuce, tomato, and ranch on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chicken Parmesan</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Breaded chicken breast with marinara and melted mozzarella on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Kickin' Chicken</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Spicy grilled chicken with pepper jack cheese, jalapeños, lettuce, and tomato</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Tuna Sandwich</h3>
                <span className="text-lg font-bold text-orange-500">$12.95</span>
              </div>
              <p className="text-slate-600">Fresh tuna salad with lettuce and tomato on your choice of bread</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Sorry Charlie</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Tuna melt with cheddar cheese on grilled sourdough</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Salmon</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">Fresh grilled salmon with lettuce, tomato, and tartar sauce on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Mahi Mahi</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">Fresh grilled mahi mahi with lettuce, tomato, and tartar sauce on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fried Cod Fish</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Beer-battered cod with lettuce, tomato, and tartar sauce on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">H.P.D.</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Hot pastrami with swiss cheese, mustard, and pickles on rye bread</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">BBQ Pulled Pork</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Slow-cooked pulled pork with BBQ sauce and coleslaw on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Manhattan Sandwich</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Corned beef, sauerkraut, swiss cheese, and Thousand Island on grilled rye</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Blackened Chicken</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Cajun spiced chicken breast with lettuce, tomato, and mayo on a French roll</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">French Dip</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Sliced roast beef on a French roll served with au jus for dipping</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Lifeguard</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Grilled chicken breast, swiss cheese, avocado, sprouts, lettuce, and tomato</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Gyros</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Seasoned lamb and beef with tzatziki sauce, onions, and tomatoes in pita bread</p>
            </div>
          </div>
        </section>

        {/* Burgers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500">
            Burgers
          </h2>
          <p className="text-slate-700 mb-6 italic">
            1/3 lb USDA choice beef burgers served with lettuce, tomato, pickles, mayo, and your choice of fries or coleslaw
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Beach Burger</h3>
                <span className="text-lg font-bold text-orange-500">$11.95</span>
              </div>
              <p className="text-slate-600">Classic burger with all the fixings</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Bacon Cheeseburger</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Topped with crispy bacon and cheddar cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Blue Cheese Burger</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Topped with crumbled blue cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Garden Burger</h3>
                <span className="text-lg font-bold text-orange-500">$12.95</span>
              </div>
              <p className="text-slate-600">Vegetarian patty with all the fixings</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Avocado-Sprout Burger</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Topped with fresh avocado, sprouts, and swiss cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">BBQ Bacon Burger</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Topped with bacon, cheddar cheese, onion rings, and BBQ sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Mushroom Burger</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Topped with sautéed mushrooms and swiss cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Patty Melt</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Burger with grilled onions and swiss cheese on grilled rye bread</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chili Burger</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Topped with homemade chili and cheddar cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Turkey Burger</h3>
                <span className="text-lg font-bold text-orange-500">$12.95</span>
              </div>
              <p className="text-slate-600">Lean ground turkey patty with all the fixings</p>
            </div>
          </div>
        </section>

        {/* Lunch Entrees Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500">
            Lunch Entrees
          </h2>
          <p className="text-slate-700 mb-6 italic">
            Served daily until 4:30 PM
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Shrimp & Chips</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Beer-battered shrimp served with fries, coleslaw, and tartar sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Two Chicken Enchiladas</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Corn tortillas filled with chicken, topped with red or green sauce, cheese, sour cream. Served with rice and beans</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Spaghetti</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Classic spaghetti with marinara sauce. Served with garlic bread</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Fish</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Choice of Sea Bass, Salmon, Mahi Mahi, or White Fish. Served with rice, vegetables, and your choice of lemon butter, teriyaki, or Cajun seasoning</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fish & Chips</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">Beer-battered cod served with fries, coleslaw, and tartar sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Two Fish Tacos</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Grilled or fried fish in soft tortillas with cabbage, pico de gallo, and special sauce. Served with rice and beans</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Linguini Aglio e Olio</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Linguini tossed with garlic, olive oil, red pepper flakes, and parsley. Served with garlic bread</p>
            </div>
          </div>
        </section>

        {/* Pizzas Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500 flex items-center gap-2">
            <Pizza className="w-8 h-8 text-orange-500" />
            Pizzas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Personal Cheese</h3>
                <span className="text-lg font-bold text-orange-500">$9.95</span>
              </div>
              <p className="text-slate-600">8" personal size pizza with mozzarella cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Cheese Pizza</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">14" large pizza with mozzarella cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Pepperoni</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Classic pepperoni pizza</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Sausage</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Italian sausage pizza</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">BBQ Chicken</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">BBQ sauce, grilled chicken, red onions, and cilantro</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Greek Pizza</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Feta cheese, olives, tomatoes, spinach, and red onions</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Margherita</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Fresh mozzarella, tomatoes, basil, and olive oil</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Spinach & Garlic</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Fresh spinach, roasted garlic, and mozzarella</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Hawaiian</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Canadian bacon and pineapple</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Scotty's Special</h3>
                <span className="text-lg font-bold text-orange-500">$19.95</span>
              </div>
              <p className="text-slate-600">Pepperoni, sausage, mushrooms, bell peppers, onions, and olives</p>
            </div>
          </div>

          <div className="mt-6 bg-ocean-100 rounded-lg p-4">
            <p className="text-slate-700 font-semibold mb-2">Additional Toppings: $2.00 each</p>
            <p className="text-slate-600">Pepperoni, Sausage, Mushrooms, Bell Peppers, Onions, Olives, Jalapeños, Tomatoes, Spinach, Pineapple, Canadian Bacon, Extra Cheese</p>
          </div>
        </section>

        {/* Tacos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500">
            Tacos
          </h2>
          <p className="text-slate-700 mb-6 italic">
            Two soft tacos served with rice and beans
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Shrimp</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">With cabbage, pico de gallo, and chipotle sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fried Fish</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Beer-battered fish with cabbage and special sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Salmon</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">With cabbage, pico de gallo, and avocado crema</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Mahi Mahi</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">With cabbage, pico de gallo, and avocado crema</p>
            </div>
          </div>
        </section>

        {/* Soups Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500">
            Soups
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Cup of Soup</h3>
                <span className="text-lg font-bold text-orange-500">$5.95</span>
              </div>
              <p className="text-slate-600">Ask about our daily specials</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Bowl of Soup</h3>
                <span className="text-lg font-bold text-orange-500">$7.95</span>
              </div>
              <p className="text-slate-600">Ask about our daily specials</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow col-span-2">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Daily Specials Include:</h3>
              <p className="text-slate-600">New England Clam Chowder, Chicken Noodle, Minestrone, French Onion, Tomato Basil, and more</p>
            </div>
          </div>
        </section>

        {/* Sides & Beverages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ocean-600 mb-4 pb-2 border-b-4 border-orange-500">
            Sides & Beverages
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">French Fries</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Sweet Potato Fries</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Onion Rings</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Coleslaw</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Side Salad</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Rice</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Refried Beans</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Vegetables</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Soft Drinks</h3>
                <span className="font-bold text-orange-500">$3.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Iced Tea</h3>
                <span className="font-bold text-orange-500">$3.50</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Lemonade</h3>
                <span className="font-bold text-orange-500">$3.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Coffee</h3>
                <span className="font-bold text-orange-500">$3.25</span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <div className="bg-ocean-100 rounded-lg p-6 text-center">
          <p className="text-slate-700 mb-2">
            <span className="font-semibold">Gluten-free options available</span> upon request
          </p>
          <p className="text-slate-600 text-sm italic">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness
          </p>
        </div>
      </div>
    </div>
  );
}
