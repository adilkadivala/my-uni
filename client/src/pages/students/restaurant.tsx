import { UtensilsCrossed, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const todaysMenu = {
  date: "Monday, June 9",
  lunch: {
    time: "11:30 - 15:00",
    mainDish: [
      "Pork bites with peppers and mushrooms",
      "Pork steak with mustard",
      "Pork cooked in tomato sauce with celery",
      "Slovakia made of pork",
      "Pan cooked chicken à la crème",
    ],
    vegetarian: ["Veggie burger (patty)"],
    salad: ["Selection of seasonal salads"],
  },
  dinner: {
    time: "18:00 - 21:00",
    dessert: ["Selection of seasonal fruits"],
  },
};

const weeklyMenu = {
  monday: {
    lunch: [
      "Pork with mustard",
      "Pork cooked in tomato sauce with celery",
      "Slovakia made of pork",
    ],
    dinner: [
      "Pork with mustard",
      "Pork cooked in tomato sauce with celery",
      "Slovakia made of pork",
    ],
  },
};

export const Restaurant = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-lg p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="h-6 w-6 dark:text-secondary" />
            <div>
              <h1 className="text-xl lg:text-2xl font-semibold dark:text-secondary">
                University Restaurant
              </h1>
              <p className="text-sm dark:text-secondary/70">
                Delicious meals for students and staff
              </p>
            </div>
          </div>
          <Badge variant="destructive">Closed: Opens at 17:30</Badge>
        </div>
      </div>

      {/* Today's Menu */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today's Menu - {todaysMenu.date}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid  gap-6">
            <Tabs defaultValue="lunch">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="lunch">Lunch</TabsTrigger>
                <TabsTrigger value="dinner">Dinner</TabsTrigger>
              </TabsList>

              <TabsContent value="lunch">
                <div className="bg-secondary/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">
                      Lunch ({todaysMenu.lunch.time})
                    </h3>
                  </div>

                  <div className=" w-full flex">
                    <div className="w-1/2 space-y-4">
                      <h4 className="font-medium mb-2">Main Dish</h4>
                      <ul className="space-y-1">
                        {todaysMenu.lunch.mainDish.map((dish, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{dish}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-1/2 space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Vegetarian</h4>
                        <ul className="space-y-1">
                          {todaysMenu.lunch.vegetarian.map((dish, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Salad</h4>
                        <ul className="space-y-1">
                          {todaysMenu.lunch.salad.map((dish, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                              <span>{dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="dinner">
                <div className="bg-secondary/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">
                      Dinner ({todaysMenu.dinner.time})
                    </h3>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Dessert</h4>
                    <ul className="space-y-1">
                      {todaysMenu.dinner.dessert.map((dish, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Menu */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-secondary/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Monday</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm mb-2 uppercase tracking-wider">
                    LUNCH
                  </h4>
                  <ul className="space-y-1">
                    {weeklyMenu.monday.lunch.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 uppercase tracking-wider">
                    DINNER
                  </h4>
                  <ul className="space-y-1">
                    {weeklyMenu.monday.dinner.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
