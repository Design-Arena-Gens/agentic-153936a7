export type Recipe = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    author: string;
  };
  prepTime: string;
  cookTime: string;
  servings: string;
  inspiration: string;
  ingredients: string[];
  method: string[];
  proTip: string;
  storage: string;
};

export const recipes: Recipe[] = [
  {
    slug: "classic-vanilla-layer-cake",
    title: "Classic Vanilla Layer Cake",
    description:
      "A cloud-soft vanilla sponge layered with silky Swiss meringue buttercream for the ultimate celebration cake.",
    image: {
      src: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80",
      alt: "Classic vanilla layer cake topped with fresh berries.",
      author: "Unsplash / Brooke Lark",
    },
    prepTime: "25 minutes",
    cookTime: "30 minutes",
    servings: "10–12 slices",
    inspiration:
      "Inspired by the timeless bakery-style birthday cakes that never go out of fashion.",
    ingredients: [
      "2 ½ cups cake flour, sifted",
      "2 ½ tsp baking powder",
      "½ tsp fine sea salt",
      "1 ¾ cups granulated sugar",
      "¾ cup unsalted butter, room temperature",
      "4 large eggs, room temperature",
      "1 cup whole milk, room temperature",
      "2 tsp pure vanilla extract",
      "Swiss meringue buttercream for filling and frosting",
      "Fresh berries for garnish",
    ],
    method: [
      "Preheat oven to 350°F (175°C). Grease and line three 8-inch round cake pans.",
      "Whisk flour, baking powder, and salt together.",
      "Cream butter and sugar until pale and fluffy, about 4 minutes.",
      "Beat in eggs one at a time, scraping the bowl. Mix in vanilla.",
      "Alternate adding dry ingredients with milk, beginning and ending with dry mix.",
      "Divide batter evenly among pans and bake 25–30 minutes until a tester comes out clean.",
      "Cool in pans for 10 minutes, then invert onto racks to cool completely.",
      "Layer cakes with buttercream and finish with a smooth outer coat. Garnish with berries.",
    ],
    proTip:
      "For ultra-flat layers, weigh the batter into each pan and wrap pans with damp cake strips while baking.",
    storage:
      "Keep chilled in an airtight container for up to 3 days. Bring to room temperature before serving.",
  },
  {
    slug: "dark-chocolate-truffle-cake",
    title: "Dark Chocolate Truffle Cake",
    description:
      "An indulgent, flourless-style chocolate cake with a glossy ganache that melts on the tongue.",
    image: {
      src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b72?auto=format&fit=crop&w=1200&q=80",
      alt: "Dark chocolate cake with ganache dripping down the sides.",
      author: "Unsplash / Taylor Kiser",
    },
    prepTime: "20 minutes",
    cookTime: "35 minutes",
    servings: "12 slices",
    inspiration:
      "Created for cacao purists who crave a dense, truffle-like texture in cake form.",
    ingredients: [
      "12 oz bittersweet chocolate, chopped",
      "¾ cup unsalted butter, cubed",
      "¾ cup brown sugar, packed",
      "½ cup granulated sugar",
      "1 tsp espresso powder",
      "¼ tsp fine sea salt",
      "6 large eggs, room temperature",
      "½ cup cocoa powder, sifted",
      "1 cup heavy cream",
      "8 oz bittersweet chocolate for ganache",
    ],
    method: [
      "Preheat oven to 325°F (165°C). Line a 9-inch springform pan with parchment and wrap the exterior with foil.",
      "Melt chocolate and butter together over a bain-marie, stirring until smooth.",
      "Whisk in sugars, espresso powder, and salt until dissolved.",
      "Beat in eggs one at a time, ensuring each is fully incorporated.",
      "Fold in cocoa powder until no streaks remain. Pour batter into prepared pan.",
      "Bake 30–35 minutes until edges are set but center is slightly wobbly.",
      "Cool completely, then chill for 2 hours before unmolding.",
      "Warm cream to a simmer, pour over chopped chocolate, whisk to ganache, and glaze cake.",
    ],
    proTip:
      "Serve slices slightly warmed with a pinch of flaky salt to heighten the chocolate intensity.",
    storage:
      "Refrigerate tightly covered for up to 5 days; bring to room temperature before serving.",
  },
  {
    slug: "lemon-elderflower-drizzle-cake",
    title: "Lemon & Elderflower Drizzle Cake",
    description:
      "Bright, fragrant layers soaked with elderflower syrup and crowned with a zesty glaze.",
    image: {
      src: "https://images.unsplash.com/photo-1514516345957-556ca7d90a6a?auto=format&fit=crop&w=1200&q=80",
      alt: "Lemon drizzle cake with candied citrus slices on top.",
      author: "Unsplash / Toa Heftiba",
    },
    prepTime: "15 minutes",
    cookTime: "40 minutes",
    servings: "10 slices",
    inspiration:
      "A nod to classic British teatime loaf cakes with a floral twist.",
    ingredients: [
      "1 cup unsalted butter, softened",
      "1 cup superfine sugar",
      "4 large eggs",
      "2 cups self-rising flour",
      "Zest of 2 lemons",
      "2 tbsp elderflower cordial",
      "Juice of 2 lemons",
      "¼ cup elderflower cordial for drizzle",
      "1 cup confectioners' sugar",
      "Candied lemons for garnish",
    ],
    method: [
      "Preheat oven to 350°F (175°C). Line a 9x5-inch loaf pan with parchment.",
      "Cream butter and sugar until light. Beat in eggs one at a time.",
      "Fold in flour, lemon zest, and cordial until just combined.",
      "Pour batter into prepared pan and bake 40 minutes until golden.",
      "While warm, poke holes and drizzle with mixture of lemon juice and cordial.",
      "Cool completely, then top with glaze made from confectioners' sugar and lemon juice.",
      "Garnish with candied lemons and a sprinkle of zest.",
    ],
    proTip:
      "For an extra moist crumb, wrap the cooled loaf and rest overnight before slicing.",
    storage:
      "Store at room temperature in an airtight tin for 3 days or refrigerate up to 5 days.",
  },
  {
    slug: "strawberry-shortcake-sheets",
    title: "Strawberry Shortcake Sheet",
    description:
      "A pillowy vanilla buttermilk sheet cake layered with macerated berries and chantilly cream.",
    image: {
      src: "https://images.unsplash.com/photo-1542826438-649b31bcd527?auto=format&fit=crop&w=1200&q=80",
      alt: "Strawberry shortcake sheet cake with whipped cream and strawberries.",
      author: "Unsplash / Food Photographer | Jennifer Pallian",
    },
    prepTime: "30 minutes",
    cookTime: "25 minutes",
    servings: "15 squares",
    inspiration:
      "Designed for potlucks where you need a showstopper that feeds a crowd with minimal fuss.",
    ingredients: [
      "2 ¼ cups all-purpose flour",
      "2 tsp baking powder",
      "½ tsp baking soda",
      "½ tsp fine sea salt",
      "1 ¾ cups granulated sugar",
      "¾ cup neutral oil",
      "3 large eggs",
      "1 tbsp vanilla bean paste",
      "1 ½ cups buttermilk",
      "2 lbs strawberries, sliced",
      "3 tbsp sugar (for macerating berries)",
      "2 cups heavy cream",
      "¼ cup confectioners' sugar",
    ],
    method: [
      "Preheat oven to 350°F (175°C). Grease and line a 9x13-inch cake pan.",
      "Whisk flour, baking powder, baking soda, and salt.",
      "In another bowl, whisk sugar, oil, eggs, and vanilla until emulsified.",
      "Alternate adding dry ingredients with buttermilk; mix until smooth.",
      "Bake 25–27 minutes until a tester comes out clean. Cool completely.",
      "Toss strawberries with sugar; let stand 20 minutes until juices release.",
      "Whip cream with confectioners' sugar to medium peaks.",
      "Spread whipped cream over cake and top with berries just before serving.",
    ],
    proTip:
      "Stabilize whipped cream with 2 tablespoons mascarpone for a more resilient topping.",
    storage:
      "Assembled cake is best same day. Refrigerate leftovers and enjoy within 24 hours.",
  },
  {
    slug: "salted-caramel-praline-cake",
    title: "Salted Caramel Praline Cake",
    description:
      "Toffee-scented layers filled with salted caramel sauce, praline crunch, and brown sugar frosting.",
    image: {
      src: "https://images.unsplash.com/photo-1605478057654-5ef1f50c3c7b?auto=format&fit=crop&w=1200&q=80",
      alt: "Caramel cake with dripping caramel sauce and pecan praline.",
      author: "Unsplash / Vee E",
    },
    prepTime: "35 minutes",
    cookTime: "40 minutes",
    servings: "12 slices",
    inspiration:
      "Built for caramel lovers who enjoy a balance of sweet, salty, and crunchy textures.",
    ingredients: [
      "3 cups cake flour",
      "2 tsp baking powder",
      "½ tsp baking soda",
      "1 tsp fine sea salt",
      "1 ½ cups light brown sugar",
      "½ cup granulated sugar",
      "1 cup unsalted butter, softened",
      "4 large eggs, room temperature",
      "1 ½ cups sour cream",
      "⅔ cup salted caramel sauce",
      "1 cup toasted pecan praline, crushed",
      "Brown sugar buttercream for frosting",
      "Flaky sea salt for finish",
    ],
    method: [
      "Heat oven to 335°F (170°C). Prepare three 8-inch cake pans with parchment.",
      "Sift flour, baking powder, baking soda, and salt together.",
      "Cream butter with sugars until fluffy. Beat in eggs one at a time.",
      "Mix in sour cream until smooth; fold in dry ingredients in two additions.",
      "Divide batter into pans and bake 30–32 minutes until set.",
      "Cool layers completely. Spread caramel and buttercream between layers, sprinkling praline.",
      "Frost exterior with buttercream, drizzle caramel, and finish with praline and flaky salt.",
    ],
    proTip:
      "Make caramel a day ahead so it thickens to a spreadable consistency and won't ooze out.",
    storage:
      "Refrigerate for up to 4 days; bring to room temperature before serving.",
  },
  {
    slug: "coconut-lime-cloud-cake",
    title: "Coconut Lime Cloud Cake",
    description:
      "Feather-light coconut chiffon layers with lime curd filling and coconut cream frosting.",
    image: {
      src: "https://images.unsplash.com/photo-1541780217214-70984f3f6f1d?auto=format&fit=crop&w=1200&q=80",
      alt: "Coconut cake with lime slices and toasted coconut flakes.",
      author: "Unsplash / Brooke Lark",
    },
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: "12 slices",
    inspiration:
      "Combines tropical flavors with a chiffon base for a featherweight dessert.",
    ingredients: [
      "2 ¼ cups cake flour",
      "1 ½ cups granulated sugar, divided",
      "1 tbsp baking powder",
      "½ tsp salt",
      "½ cup neutral oil",
      "8 large eggs, separated",
      "¾ cup coconut milk",
      "Zest of 3 limes",
      "½ tsp cream of tartar",
      "Lime curd for filling",
      "Coconut whipped cream frosting",
      "Toasted coconut flakes for garnish",
    ],
    method: [
      "Preheat oven to 325°F (165°C). Leave two 9-inch round pans ungreased.",
      "Whisk flour, 1 cup sugar, baking powder, and salt.",
      "Combine oil, egg yolks, coconut milk, and lime zest; whisk into dry ingredients.",
      "Beat egg whites with cream of tartar, gradually adding remaining sugar to stiff peaks.",
      "Fold meringue into batter in three additions.",
      "Divide batter between pans and bake 40–45 minutes until cake springs back.",
      "Invert pans to cool completely. Run knife to release.",
      "Fill with lime curd, frost with coconut cream, and shower with toasted coconut.",
    ],
    proTip:
      "Use chilled coconut cream for frosting to ensure it whips to airy peaks.",
    storage:
      "Refrigerate up to 3 days. Keep covered to prevent the sponge from drying.",
  },
  {
    slug: "red-velvet-cheesecake-cake",
    title: "Red Velvet Cheesecake Cake",
    description:
      "Two vivid red velvet layers sandwich a creamy cheesecake center, finished with tangy cream cheese frosting.",
    image: {
      src: "https://images.unsplash.com/photo-1606890737304-0f34bb51ca1f?auto=format&fit=crop&w=1200&q=80",
      alt: "Red velvet cake with cream cheese frosting and crumbs on top.",
      author: "Unsplash / Taylor Kiser",
    },
    prepTime: "45 minutes (plus chilling)",
    cookTime: "1 hour 10 minutes",
    servings: "14 slices",
    inspiration:
      "A hybrid masterpiece for anyone torn between cheesecake and cake.",
    ingredients: [
      "24 oz cream cheese, room temperature",
      "1 cup granulated sugar, divided",
      "3 large eggs, room temperature",
      "1 tsp vanilla extract",
      "2 ½ cups cake flour",
      "2 tbsp cocoa powder",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 ½ cups vegetable oil",
      "1 cup buttermilk",
      "2 tbsp red gel food coloring",
      "Cream cheese frosting for finish",
    ],
    method: [
      "Heat oven to 325°F (165°C). Prepare a 9-inch springform and two 9-inch round pans.",
      "For cheesecake layer, beat cream cheese with ½ cup sugar until smooth. Add 1 egg and vanilla; bake in springform for 50 minutes. Chill completely.",
      "Increase oven to 350°F (175°C). Mix flour, cocoa, baking soda, and salt.",
      "Whisk oil with remaining sugar, 2 eggs, buttermilk, and food coloring. Fold in dry ingredients.",
      "Divide batter between two pans and bake 28–30 minutes until set.",
      "Cool cakes completely. Assemble with cheesecake in the center and frost exterior with cream cheese frosting.",
      "Chill cake 1 hour before slicing for clean layers.",
    ],
    proTip:
      "Bake cheesecake layer the day before to simplify assembly and ensure it is fully set.",
    storage:
      "Refrigerate tightly wrapped for up to 4 days. Slice while chilled for sharp layers.",
  },
  {
    slug: "spiced-carrot-walnut-cake",
    title: "Spiced Carrot Walnut Cake",
    description:
      "A moist carrot cake infused with warm spices, roasted walnuts, and tangy orange cream cheese frosting.",
    image: {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      alt: "Carrot cake slices with cream cheese frosting and nuts.",
      author: "Unsplash / Bruna Branco",
    },
    prepTime: "25 minutes",
    cookTime: "35 minutes",
    servings: "12 slices",
    inspiration:
      "A cozy classic elevated with orange zest and toasted nuts for extra complexity.",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1 tsp kosher salt",
      "2 tsp ground cinnamon",
      "½ tsp ground nutmeg",
      "¼ tsp ground cloves",
      "1 ⅓ cups granulated sugar",
      "1 cup light brown sugar",
      "1 cup neutral oil",
      "4 large eggs",
      "3 cups grated carrots",
      "1 cup toasted walnuts, chopped",
      "Zest of 1 orange",
      "Orange cream cheese frosting",
    ],
    method: [
      "Preheat oven to 350°F (175°C). Grease and line two 9-inch round pans.",
      "Whisk flour, baking powder, baking soda, salt, and spices.",
      "Beat sugars with oil until combined, then mix in eggs one at a time.",
      "Fold in dry ingredients until just combined. Stir in carrots, walnuts, and orange zest.",
      "Divide batter between pans and bake 33–35 minutes until set.",
      "Cool layers, frost with orange cream cheese, and decorate with extra walnuts.",
    ],
    proTip:
      "Grate carrots finely for a uniform crumb and squeeze out excess moisture if very juicy.",
    storage:
      "Refrigerate for up to 5 days. Bring to room temperature before serving for best texture.",
  },
  {
    slug: "espresso-hazelnut-torte",
    title: "Espresso Hazelnut Torte",
    description:
      "A gluten-free delight made with ground hazelnuts, espresso syrup, and chocolate glaze.",
    image: {
      src: "https://images.unsplash.com/photo-1599785209793-19d4b4dd74c5?auto=format&fit=crop&w=1200&q=80",
      alt: "Hazelnut torte topped with chocolate glaze and hazelnuts.",
      author: "Unsplash / Mockup Graphics",
    },
    prepTime: "25 minutes",
    cookTime: "30 minutes",
    servings: "10 slices",
    inspiration:
      "Crafted for coffee aficionados who appreciate nutty depth without wheat flour.",
    ingredients: [
      "2 cups toasted hazelnuts",
      "¾ cup granulated sugar",
      "6 large eggs, separated",
      "¼ cup honey",
      "2 tbsp instant espresso powder",
      "1 tsp vanilla extract",
      "¼ tsp fine sea salt",
      "⅓ cup brewed espresso",
      "4 oz dark chocolate",
      "¼ cup heavy cream",
    ],
    method: [
      "Preheat oven to 350°F (175°C). Line the base of a 9-inch springform pan with parchment.",
      "Grind hazelnuts with half the sugar until fine but not paste-like.",
      "Beat egg yolks with remaining sugar, honey, espresso powder, and vanilla until thickened.",
      "Fold in ground hazelnuts. In separate bowl, whip egg whites with salt to soft peaks and fold into batter.",
      "Bake 28–30 minutes until center springs back. Cool, then soak with brewed espresso.",
      "Make ganache by melting chocolate with cream; spread over cake and garnish with hazelnuts.",
    ],
    proTip:
      "Pulse hazelnuts with sugar to avoid the nuts turning into butter before they are finely ground.",
    storage:
      "Keeps at room temperature under a dome for 2 days or refrigerate up to 5 days.",
  },
  {
    slug: "mango-passionfruit-mousse-cake",
    title: "Mango Passionfruit Mousse Cake",
    description:
      "Tropical mousse layered over coconut dacquoise with a vibrant passionfruit mirror glaze.",
    image: {
      src: "https://images.unsplash.com/photo-1542317854-0d6d2e4cf3df?auto=format&fit=crop&w=1200&q=80",
      alt: "Mango passionfruit mousse cake with mirror glaze.",
      author: "Unsplash / Alex Loup",
    },
    prepTime: "1 hour",
    cookTime: "25 minutes",
    servings: "10 slices",
    inspiration:
      "Inspired by patisserie entremets featuring bright fruit purees and feather-light textures.",
    ingredients: [
      "½ cup almond flour",
      "½ cup desiccated coconut",
      "⅔ cup confectioners' sugar",
      "4 large egg whites",
      "½ cup granulated sugar",
      "1 ½ cups mango puree",
      "½ cup passionfruit pulp",
      "2 tbsp lime juice",
      "1 tbsp gelatin powder",
      "2 cups heavy cream, whipped",
      "½ cup water",
      "½ cup glucose syrup",
      "¾ cup sugar (for glaze)",
      "½ cup sweetened condensed milk",
      "6 sheets gelatin, bloomed",
      "Yellow food coloring",
    ],
    method: [
      "Heat oven to 325°F (165°C). Spread almond flour, coconut, and confectioners' sugar on a tray; bake 5 minutes until fragrant.",
      "Whip egg whites to soft peaks, gradually add sugar to stiff peaks. Fold in dry ingredients.",
      "Spread batter into an 8-inch round on parchment and bake 18–20 minutes. Cool and trim if needed.",
      "Bloom gelatin in lime juice; warm half the mango puree with passionfruit, then whisk in gelatin until melted.",
      "Fold in remaining puree and chilled whipped cream. Pour over dacquoise in a ring mold and freeze overnight.",
      "For glaze, boil water, glucose, and sugar to 217°F (103°C). Remove from heat, stir in condensed milk, bloomed gelatin, and chocolate. Blend until smooth.",
      "Color glaze and cool to 90°F (32°C). Unmold frozen cake, pour glaze, and set 5 minutes before decorating.",
    ],
    proTip:
      "Use an immersion blender for the glaze to eliminate bubbles for a flawless mirror finish.",
    storage:
      "Keep frozen up to 1 month. Thaw in the refrigerator overnight before serving.",
  },
];

