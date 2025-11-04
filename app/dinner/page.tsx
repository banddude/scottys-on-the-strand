import { Utensils, Wine, ChefHat } from 'lucide-react';

const basePath = '/scottys-on-the-strand';

export default function DinnerMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center pt-[60px]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${basePath}/videos/dinner-background.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <Wine className="w-12 h-12 text-sand-100" />
            <h1 className="text-6xl md:text-8xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              Dinner Menu
            </h1>
            <ChefHat className="w-12 h-12 text-sand-100" />
          </div>
          <p className="text-2xl md:text-3xl text-sand-100 font-medium max-w-3xl mx-auto" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Enjoy the sunset on the Pacific with a specialty cocktail
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Appetizers Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Appetizers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Scotty's Famous Calamari</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Tender calamari rings, lightly breaded and fried golden. Served with marinara and lemon aioli</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Shrimp Baja Rolls</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Crispy rolls filled with seasoned shrimp, cabbage, and spicy Baja sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Coconut Shrimp</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Jumbo shrimp coated in coconut flakes, fried crispy. Served with sweet chili sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Buffalo Wings</h3>
                <span className="text-lg font-bold text-orange-500">$12.95</span>
              </div>
              <p className="text-slate-600">Classic buffalo wings tossed in your choice of sauce. Served with celery and blue cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Quesadilla</h3>
                <span className="text-lg font-bold text-orange-500">$11.95</span>
              </div>
              <p className="text-slate-600 mb-2">Grilled flour tortilla filled with melted cheese. Served with salsa, sour cream, and guacamole</p>
              <p className="text-sm text-ocean-600 font-medium">Add Spinach +$2 | Add Chicken +$3</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chicken Breast Strips</h3>
                <span className="text-lg font-bold text-orange-500">$12.95</span>
              </div>
              <p className="text-slate-600">Crispy chicken tenders served with honey mustard and barbecue sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Heart of My Heart</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Tender artichoke hearts, lightly breaded and fried. Served with garlic aioli</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Nachos</h3>
                <span className="text-lg font-bold text-orange-500">$13.95</span>
              </div>
              <p className="text-slate-600">Crispy tortilla chips loaded with cheese, jalapeños, tomatoes, onions, sour cream, and guacamole</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fried Zucchini Sticks</h3>
                <span className="text-lg font-bold text-orange-500">$10.95</span>
              </div>
              <p className="text-slate-600">Fresh zucchini lightly breaded and fried. Served with ranch dressing</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Potato Skins</h3>
                <span className="text-lg font-bold text-orange-500">$11.95</span>
              </div>
              <p className="text-slate-600">Crispy potato skins loaded with cheddar cheese, bacon bits, and green onions. Served with sour cream</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Mozzarella Sticks</h3>
                <span className="text-lg font-bold text-orange-500">$10.95</span>
              </div>
              <p className="text-slate-600">Golden fried mozzarella cheese served with marinara sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Garlic Bread</h3>
                <span className="text-lg font-bold text-orange-500">$6.95</span>
              </div>
              <p className="text-slate-600">Toasted French bread with garlic butter</p>
            </div>
          </div>
        </section>

        {/* Soups & Salads */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Soups & Salads
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">New England Clam Chowder</h3>
                <div className="text-right">
                  <span className="text-lg font-bold text-orange-500 block">Cup $5.95</span>
                  <span className="text-lg font-bold text-orange-500">Bowl $7.95</span>
                </div>
              </div>
              <p className="text-slate-600">Creamy clam chowder loaded with tender clams and potatoes</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Soup of the Day</h3>
                <div className="text-right">
                  <span className="text-lg font-bold text-orange-500 block">Cup $5.95</span>
                  <span className="text-lg font-bold text-orange-500">Bowl $7.95</span>
                </div>
              </div>
              <p className="text-slate-600">Ask your server about today's fresh soup selection</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">House Salad</h3>
                <span className="text-lg font-bold text-orange-500">$8.95</span>
              </div>
              <p className="text-slate-600">Mixed greens, tomatoes, cucumbers, and carrots with your choice of dressing</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Caesar Salad</h3>
                <span className="text-lg font-bold text-orange-500">$10.95</span>
              </div>
              <p className="text-slate-600 mb-2">Crisp romaine, parmesan cheese, croutons, and classic Caesar dressing</p>
              <p className="text-sm text-ocean-600 font-medium">Add Grilled Chicken +$5 | Add Grilled Shrimp +$7</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Cobb Salad</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Mixed greens, grilled chicken, bacon, avocado, hard-boiled egg, tomatoes, and blue cheese</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Salmon Salad</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Fresh grilled salmon over mixed greens with tomatoes, cucumbers, and balsamic vinaigrette</p>
            </div>
          </div>
        </section>

        {/* Fresh Fish */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Fresh Fish
          </h2>
          <p className="text-slate-700 mb-6 text-lg italic">
            All fish entrees served with rice pilaf, sautéed vegetables, dinner salad, and garlic bread
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fresh Grilled Salmon</h3>
                <span className="text-lg font-bold text-orange-500">$21.95</span>
              </div>
              <p className="text-slate-600">Choice of lemon butter, teriyaki glaze, or Cajun seasoning</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fresh Grilled Mahi Mahi</h3>
                <span className="text-lg font-bold text-orange-500">$21.95</span>
              </div>
              <p className="text-slate-600">Choice of lemon butter, teriyaki glaze, or Cajun seasoning</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fresh Grilled Sea Bass</h3>
                <span className="text-lg font-bold text-orange-500">$23.95</span>
              </div>
              <p className="text-slate-600">Choice of lemon butter, teriyaki glaze, or Cajun seasoning</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fresh Grilled Swordfish</h3>
                <span className="text-lg font-bold text-orange-500">$23.95</span>
              </div>
              <p className="text-slate-600">Choice of lemon butter, teriyaki glaze, or Cajun seasoning</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Shrimp Scampi</h3>
                <span className="text-lg font-bold text-orange-500">$20.95</span>
              </div>
              <p className="text-slate-600">Jumbo shrimp sautéed in garlic butter and white wine over linguini</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fish & Chips</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Beer-battered cod served with fries, coleslaw, and tartar sauce</p>
            </div>
          </div>
        </section>

        {/* Steaks & Chops */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Steaks & Chops
          </h2>
          <p className="text-slate-700 mb-6 text-lg italic">
            All steaks and chops served with choice of mashed or baked potato, sautéed vegetables, dinner salad, and garlic bread
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">New York Steak (12 oz)</h3>
                <span className="text-lg font-bold text-orange-500">$28.95</span>
              </div>
              <p className="text-slate-600">USDA Choice beef, grilled to perfection</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Ribeye Steak (14 oz)</h3>
                <span className="text-lg font-bold text-orange-500">$32.95</span>
              </div>
              <p className="text-slate-600">USDA Choice beef with exceptional marbling and flavor</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Filet Mignon (8 oz)</h3>
                <span className="text-lg font-bold text-orange-500">$34.95</span>
              </div>
              <p className="text-slate-600">The most tender cut, perfectly grilled</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Surf & Turf</h3>
                <span className="text-lg font-bold text-orange-500">$38.95</span>
              </div>
              <p className="text-slate-600">8 oz filet mignon paired with jumbo grilled shrimp</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Baby Back Ribs</h3>
                <span className="text-lg font-bold text-orange-500">$22.95</span>
              </div>
              <p className="text-slate-600">Fall-off-the-bone tender ribs with BBQ sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Pork Chops (2)</h3>
                <span className="text-lg font-bold text-orange-500">$18.95</span>
              </div>
              <p className="text-slate-600">Thick-cut, grilled pork chops</p>
            </div>
          </div>
        </section>

        {/* Chicken & More */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Chicken & More
          </h2>
          <p className="text-slate-700 mb-6 text-lg italic">
            All entrees served with choice of mashed or baked potato, sautéed vegetables, dinner salad, and garlic bread
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Grilled Chicken Breast</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Marinated and grilled to perfection</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chicken Parmesan</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Breaded chicken breast with marinara and melted mozzarella over linguini</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chicken Marsala</h3>
                <span className="text-lg font-bold text-orange-500">$18.95</span>
              </div>
              <p className="text-slate-600">Chicken breast sautéed with mushrooms in a Marsala wine sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chicken Piccata</h3>
                <span className="text-lg font-bold text-orange-500">$18.95</span>
              </div>
              <p className="text-slate-600">Chicken breast sautéed with capers in a lemon butter sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Roasted Half Chicken</h3>
                <span className="text-lg font-bold text-orange-500">$17.95</span>
              </div>
              <p className="text-slate-600">Slow-roasted to perfection with herbs and spices</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Meatloaf</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Homemade meatloaf topped with savory gravy</p>
            </div>
          </div>
        </section>

        {/* Pasta */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Pasta
          </h2>
          <p className="text-slate-700 mb-6 text-lg italic">
            All pasta dishes served with dinner salad and garlic bread
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Spaghetti Marinara</h3>
                <span className="text-lg font-bold text-orange-500">$14.95</span>
              </div>
              <p className="text-slate-600">Classic spaghetti with homemade marinara sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Spaghetti with Meat Sauce</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">Spaghetti topped with hearty meat sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Fettuccine Alfredo</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600 mb-2">Fettuccine tossed in creamy Alfredo sauce</p>
              <p className="text-sm text-ocean-600 font-medium">Add Grilled Chicken +$5 | Add Grilled Shrimp +$7</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Linguini with Clams</h3>
                <span className="text-lg font-bold text-orange-500">$18.95</span>
              </div>
              <p className="text-slate-600">Fresh clams sautéed with garlic in white wine sauce over linguini</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Penne Arrabbiata</h3>
                <span className="text-lg font-bold text-orange-500">$15.95</span>
              </div>
              <p className="text-slate-600">Penne pasta in spicy tomato sauce with garlic and red pepper flakes</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-ocean-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Lasagna</h3>
                <span className="text-lg font-bold text-orange-500">$16.95</span>
              </div>
              <p className="text-slate-600">Layers of pasta, meat sauce, ricotta, and mozzarella cheese</p>
            </div>
          </div>
        </section>

        {/* Sides */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Sides
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Mashed Potatoes</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Baked Potato</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">French Fries</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Sautéed Vegetables</h3>
                <span className="font-bold text-orange-500">$4.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Rice Pilaf</h3>
                <span className="font-bold text-orange-500">$3.95</span>
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
                <h3 className="font-semibold text-slate-700">Onion Rings</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-slate-700">Side Salad</h3>
                <span className="font-bold text-orange-500">$5.95</span>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-ocean-600 mb-6 pb-3 border-b-4 border-orange-500">
            Desserts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">New York Cheesecake</h3>
                <span className="text-lg font-bold text-orange-500">$7.95</span>
              </div>
              <p className="text-slate-600">Creamy cheesecake with your choice of strawberry or chocolate topping</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Chocolate Lava Cake</h3>
                <span className="text-lg font-bold text-orange-500">$8.95</span>
              </div>
              <p className="text-slate-600">Warm chocolate cake with molten center, served with vanilla ice cream</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Key Lime Pie</h3>
                <span className="text-lg font-bold text-orange-500">$7.95</span>
              </div>
              <p className="text-slate-600">Tangy and sweet Key lime pie with whipped cream</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Bread Pudding</h3>
                <span className="text-lg font-bold text-orange-500">$7.95</span>
              </div>
              <p className="text-slate-600">Homemade bread pudding with warm caramel sauce</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Ice Cream Sundae</h3>
                <span className="text-lg font-bold text-orange-500">$6.95</span>
              </div>
              <p className="text-slate-600">Three scoops with chocolate or strawberry sauce, whipped cream, and cherry</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-slate-800">Apple Pie</h3>
                <span className="text-lg font-bold text-orange-500">$7.95</span>
              </div>
              <p className="text-slate-600">Warm homemade apple pie with vanilla ice cream</p>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <div className="bg-ocean-100 rounded-lg p-6 text-center border-2 border-ocean-500/30">
          <p className="text-slate-700 mb-2 text-lg">
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
