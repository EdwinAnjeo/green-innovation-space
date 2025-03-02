
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { LockKeyhole, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      if (username && password) {
        toast({
          title: "Login Successful",
          description: "Welcome to the ATDC staff portal",
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Please check your credentials and try again.",
        });
      }
    }, 1500);
  };

  return (
    <Layout showPartnersCarousel={false}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-atdc-green mb-2">Staff Portal</h1>
              <p className="text-gray-600">Login to access your ATDC account</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-atdc-green focus:border-atdc-green"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockKeyhole size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-atdc-green focus:border-atdc-green"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-atdc-green focus:ring-atdc-green border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-sm font-medium text-atdc-green hover:text-atdc-green/80">
                    Forgot password?
                  </a>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-atdc-orange hover:bg-atdc-orange/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600">Having trouble logging in? Contact your administrator or <a href="/contact" className="text-atdc-green font-medium">get support</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
