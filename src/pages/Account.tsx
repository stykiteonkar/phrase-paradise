
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import QuoteDisplay from "@/components/QuoteDisplay";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          {/* User Profile Summary */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-2xl">
                JD
              </div>
              
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500 mb-4">john.doe@example.com</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    Premium Plan
                  </span>
                  <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                    Member since Oct 2023
                  </span>
                </div>
              </div>
              
              <div>
                <Button variant="outline" className="mb-2 w-full md:w-auto">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
          
          {/* Account Tabs */}
          <Tabs defaultValue="collections">
            <TabsList className="mb-6">
              <TabsTrigger value="collections">My Collections</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="collections">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Motivational Quotes</h3>
                    <p className="text-gray-500 text-sm mb-3">15 quotes</p>
                    <Button variant="outline" size="sm" className="w-full">View Collection</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Leadership</h3>
                    <p className="text-gray-500 text-sm mb-3">8 quotes</p>
                    <Button variant="outline" size="sm" className="w-full">View Collection</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-dashed">
                  <CardContent className="p-6 flex flex-col items-center justify-center min-h-[180px] text-center">
                    <p className="text-gray-500 mb-4">Create a new collection</p>
                    <Button variant="outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                      New Collection
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <QuoteDisplay showNewQuoteButton={false} />
                <QuoteDisplay showNewQuoteButton={false} />
                <QuoteDisplay showNewQuoteButton={false} />
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Subscription</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Premium Plan</p>
                          <p className="text-sm text-gray-500">Renews on November 12, 2023</p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-3">Email Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="checkbox" id="dailyQuote" className="mr-2" defaultChecked />
                          <label htmlFor="dailyQuote" className="text-sm">Daily quote notification</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weeklyNewsletter" className="mr-2" defaultChecked />
                          <label htmlFor="weeklyNewsletter" className="text-sm">Weekly newsletter</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="productUpdates" className="mr-2" />
                          <label htmlFor="productUpdates" className="text-sm">Product updates</label>
                        </div>
                      </div>
                      <Button className="mt-4" size="sm">Save Preferences</Button>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-3 text-red-600">Danger Zone</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive" size="sm">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
