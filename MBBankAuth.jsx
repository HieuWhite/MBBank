// Simple Login/Register UI for MBBank brand
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MBBankAuth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-800">MBBank {isLogin ? 'Đăng nhập' : 'Đăng ký'}</h1>
            <p className="text-sm text-gray-500">(Note: Đây là giao diện thử nghiệm / test UI)</p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <Input type="text" placeholder="Họ và tên" className="rounded-xl" />
            )}
            <Input type="email" placeholder="Email" className="rounded-xl" />
            <Input type="password" placeholder="Mật khẩu" className="rounded-xl" />
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl">
              {isLogin ? 'Đăng nhập' : 'Đăng ký'}
            </Button>
          </form>

          <div className="text-center text-sm">
            {isLogin ? (
              <p>
                Chưa có tài khoản?{' '}
                <button onClick={() => setIsLogin(false)} className="text-blue-600 underline">
                  Đăng ký
                </button>
              </p>
            ) : (
              <p>
                Đã có tài khoản?{' '}
                <button onClick={() => setIsLogin(true)} className="text-blue-600 underline">
                  Đăng nhập
                </button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
