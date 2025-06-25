import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Slider } from './components/ui/slider';
import { 
  Gavel, 
  Car, 
  DollarSign, 
  Clock, 
  Star, 
  Shield, 
  CheckCircle, 
  TrendingUp,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  Timer,
  Award,
  Truck,
  Search
} from 'lucide-react';
import './App.css';

// Homepage Component
function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Gavel className="h-8 w-8 text-treadbid-blue" />
              <span className="text-2xl font-bold text-treadbid-blue">TreadBid™</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/how-it-works" className="text-gray-600 hover:text-treadbid-blue">How It Works</Link>
              <Link to="/for-shops" className="text-gray-600 hover:text-treadbid-blue">For Tire Shops</Link>
              <Link to="/login" className="text-gray-600 hover:text-treadbid-blue">Sign In</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full floating-element"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full floating-element" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 border border-white rounded-full floating-element" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Name Your Price for Tires.
            <br />
            <span className="text-orange-400">Let Shops Compete.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            The world's first buyer-driven tire marketplace. Set your price, watch shops compete, choose the winner.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <Button 
              onClick={() => navigate('/request')}
              className="w-full bg-treadbid-orange hover:bg-orange-600 text-white text-lg py-4 px-8 rounded-lg font-semibold"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Name Your Price Now
            </Button>
          </div>

          {/* Process Flow */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-sm">Customer sets price</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="text-sm">Shops compete</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6" />
              </div>
              <p className="text-sm">Customer chooses winner</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2 trust-badge px-4 py-2 rounded-full">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Verified Shops</span>
            </div>
            <div className="flex items-center space-x-2 trust-badge px-4 py-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Secure Payments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why TreadBid™ Changes Everything</h2>
            <p className="text-xl text-gray-600">The first marketplace where tire shops compete for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-card border-l-4 border-treadbid-blue">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-treadbid-orange" />
                  <span>You Set the Price</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Name your price for tires and let the market come to you. No more accepting whatever price shops offer.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-l-4 border-treadbid-orange">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-treadbid-blue" />
                  <span>Maximum Competition</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Local and online tire shops compete for your business, driving prices down and service up.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span>Risk-Free Guarantee</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Secure escrow payments and verified shops ensure you get exactly what you pay for.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-treadbid-blue mb-2">25%</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-treadbid-blue mb-2">500+</div>
              <div className="text-gray-600">Verified Shops</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-treadbid-blue mb-2">15min</div>
              <div className="text-gray-600">Average Process Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-treadbid-blue mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-treadbid-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Save on Tires?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of customers who've discovered the power of competitive tire shopping
          </p>
          <Button 
            onClick={() => navigate('/request')}
            className="bg-treadbid-orange hover:bg-orange-600 text-white text-lg py-4 px-8 rounded-lg font-semibold"
          >
            Start Your Tire Request
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gavel className="h-6 w-6 text-treadbid-orange" />
                <span className="text-xl font-bold">TreadBid™</span>
              </div>
              <p className="text-gray-400">
                The revolutionary tire marketplace where customers name their price and shops compete.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/request" className="hover:text-white">Request Tires</Link></li>
                <li><Link to="/support" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Tire Shops</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/for-shops" className="hover:text-white">Join as Shop</Link></li>
                <li><Link to="/shop-dashboard" className="hover:text-white">Shop Dashboard</Link></li>
                <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TreadBid™. All rights reserved. Revolutionizing tire retail.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Tire Request Component
function TireRequest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    tireSize: '',
    location: '',
    priceTarget: 500,
    timeline: 'flexible'
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Submit request and go to bidding
      navigate('/bidding', { state: { requestData: formData } });
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Gavel className="h-8 w-8 text-treadbid-blue" />
              <span className="text-2xl font-bold text-treadbid-blue">TreadBid™</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {step} of 4</span>
            <span>{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-treadbid-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-treadbid-blue">
              {step === 1 && "Tell Us About Your Vehicle"}
              {step === 2 && "Where Are You Located?"}
              {step === 3 && "Name Your Price"}
              {step === 4 && "Review Your Request"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <Input
                      type="number"
                      placeholder="2020"
                      value={formData.year}
                      onChange={(e) => updateFormData('year', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                    <Input
                      placeholder="Toyota"
                      value={formData.make}
                      onChange={(e) => updateFormData('make', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                    <Input
                      placeholder="Camry"
                      value={formData.model}
                      onChange={(e) => updateFormData('model', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tire Size</label>
                  <Input
                    placeholder="215/55R17 (check your tire sidewall)"
                    value={formData.tireSize}
                    onChange={(e) => updateFormData('tireSize', e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Find this on your tire sidewall or vehicle door jamb
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Installation Location</label>
                  <Input
                    placeholder="Enter your ZIP code or city"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                  >
                    <option value="asap">ASAP (within 24 hours)</option>
                    <option value="week">Within a week</option>
                    <option value="flexible">Flexible (best price)</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    What's the most you want to pay for 4 tires (installed)?
                  </label>
                  <div className="text-6xl font-bold text-treadbid-blue mb-4">
                    ${formData.priceTarget}
                  </div>
                  <Slider
                    value={[formData.priceTarget]}
                    onValueChange={(value) => updateFormData('priceTarget', value[0])}
                    max={1000}
                    min={200}
                    step={25}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$200</span>
                    <span>$1000</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-treadbid-blue mb-2">Market Intelligence</h3>
                  <p className="text-sm text-gray-600">
                    Typical price range for {formData.tireSize}: $400-$800
                  </p>
                  <div className="mt-2">
                    {formData.priceTarget < 400 && (
                      <Badge variant="destructive">Aggressive - May get fewer bids</Badge>
                    )}
                    {formData.priceTarget >= 400 && formData.priceTarget <= 600 && (
                      <Badge className="bg-orange-100 text-orange-800">Competitive - Good chance of bids</Badge>
                    )}
                    {formData.priceTarget > 600 && (
                      <Badge className="bg-green-100 text-green-800">Conservative - Likely many bids</Badge>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-treadbid-blue">Review Your Request</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div><strong>Vehicle:</strong> {formData.year} {formData.make} {formData.model}</div>
                  <div><strong>Tire Size:</strong> {formData.tireSize}</div>
                  <div><strong>Location:</strong> {formData.location}</div>
                  <div><strong>Your Price:</strong> ${formData.priceTarget}</div>
                  <div><strong>Timeline:</strong> {formData.timeline}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-treadbid-blue mb-2">What Happens Next?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Your request goes live to verified tire shops</li>
                    <li>• Shops have 24 hours to submit their best bids</li>
                    <li>• You'll see real-time bids and can accept the best one</li>
                    <li>• Secure payment and professional installation</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setStep(step - 1)}
                  className="border-treadbid-blue text-treadbid-blue"
                >
                  Back
                </Button>
              )}
              <Button 
                onClick={handleNext}
                className="bg-treadbid-orange hover:bg-orange-600 text-white ml-auto"
                disabled={
                  (step === 1 && (!formData.year || !formData.make || !formData.model || !formData.tireSize)) ||
                  (step === 2 && !formData.location)
                }
              >
                {step === 4 ? 'Submit Request' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Bidding Interface Component
function BiddingInterface() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [bids, setBids] = useState([
    {
      id: 1,
      shopName: "Larry's Tire Center",
      rating: 4.8,
      reviewCount: 127,
      tireBrand: "Michelin Defender T+H",
      price: 520,
      installTime: "Tomorrow 2-4 PM",
      location: "2.3 miles away",
      verified: true
    },
    {
      id: 2,
      shopName: "Discount Tire Store",
      rating: 4.6,
      reviewCount: 89,
      tireBrand: "Goodyear Assurance",
      price: 485,
      installTime: "Today 4-6 PM",
      location: "1.8 miles away",
      verified: true
    },
    {
      id: 3,
      shopName: "Best Price Tires",
      rating: 4.9,
      reviewCount: 203,
      tireBrand: "Bridgestone Ecopia",
      price: 435,
      installTime: "Wednesday 10-12 PM",
      location: "3.1 miles away",
      verified: true
    }
  ]);

  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAcceptBid = (bidId) => {
    navigate('/confirmation', { state: { selectedBid: bids.find(b => b.id === bidId) } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Gavel className="h-8 w-8 text-treadbid-blue" />
              <span className="text-2xl font-bold text-treadbid-blue">TreadBid™</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="countdown-timer text-2xl font-bold">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-gray-600">Time Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Request Details */}
          <div className="lg:col-span-1">
            <Card className="gradient-card sticky top-8">
              <CardHeader>
                <CardTitle className="text-treadbid-blue">Your Tire Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-2xl text-gray-900">215/55R17</h3>
                  <p className="text-gray-600">2020 Toyota Camry</p>
                </div>
                <div className="bg-treadbid-blue text-white p-4 rounded-lg text-center">
                  <div className="text-sm opacity-90">Your Price Target</div>
                  <div className="text-3xl font-bold">${500}</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span>Houston, TX</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span>Flexible</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bids Received:</span>
                    <span className="font-semibold text-treadbid-blue">{bids.length}</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Great news! You have competitive bids</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Incoming Bids */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Incoming Bids</h2>
              <p className="text-gray-600">Tire shops are competing for your business. Choose the best offer!</p>
            </div>

            <div className="space-y-4">
              {bids.map((bid, index) => (
                <Card key={bid.id} className={`bid-card slide-in`} style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">{bid.shopName}</h3>
                          {bid.verified && (
                            <Badge className="bg-green-100 text-green-800">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 shop-rating fill-current" />
                            <span>{bid.rating}</span>
                            <span>({bid.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{bid.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-treadbid-blue">${bid.price}</div>
                        <div className="text-sm text-gray-600">Total installed</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Tire Brand & Model</div>
                        <div className="font-semibold">{bid.tireBrand}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Installation Time</div>
                        <div className="font-semibold flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{bid.installTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                      </div>
                      <Button 
                        onClick={() => handleAcceptBid(bid.id)}
                        className="bg-treadbid-orange hover:bg-orange-600 text-white"
                      >
                        Accept This Bid
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Waiting for more bids */}
            <Card className="mt-6 border-dashed border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <div className="pulse-animation">
                  <Timer className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Waiting for More Bids</h3>
                <p className="text-gray-600">
                  More tire shops may submit bids before the deadline. 
                  You can accept a bid anytime or wait for better offers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Confirmation Component
function Confirmation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <Card className="max-w-2xl w-full mx-4">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bid Accepted!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Congratulations! You've successfully accepted a bid. The tire shop will contact you shortly to confirm installation details.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-4">Next Steps:</h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Shop will call you within 1 hour</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Confirm installation appointment</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Payment processed after installation</span>
              </li>
            </ul>
          </div>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-treadbid-blue hover:bg-blue-700 text-white"
          >
            Return to Homepage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/request" element={<TireRequest />} />
        <Route path="/bidding" element={<BiddingInterface />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;

