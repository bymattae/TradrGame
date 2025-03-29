'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../lib/hooks/useAuth';
import PageTransition from './components/PageTransition';

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <PageTransition>
      <main className="h-[100dvh] flex flex-col bg-white relative overflow-hidden">
        {/* Floating Game Elements */}
        <motion.div 
          className="absolute w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-black/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
          {/* Game Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 text-5xl sm:text-6xl font-bold mb-3" style={{ fontFamily: 'monospace' }}>
              <motion.span 
                className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                BUY
              </motion.span>
              <motion.span 
                className="text-black"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                OR
              </motion.span>
              <motion.span 
                className="text-green-500 drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                SELL
              </motion.span>
            </div>
            <motion.p 
              className="text-base text-gray-600 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The game for traders
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📈
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Game Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <motion.button
              onClick={() => router.push('/auth')}
              className="game-btn bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600"
              whileTap={{ scale: 0.95, y: 4 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-transparent"
                initial={false}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative flex items-center justify-center gap-2">
                <span>NEW GAME</span>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎮
                </motion.span>
              </div>
            </motion.button>

            <motion.button
              className="game-btn bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
              whileTap={{ scale: 0.95, y: 4 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-transparent"
                initial={false}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span>1-1 BATTLE</span>
                  <motion.div className="flex items-center gap-1">
                    <motion.span
                      animate={{ rotate: [-15, 15], x: -2 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      ⚔️
                    </motion.span>
                    <motion.span
                      animate={{ rotate: [15, -15], x: 2 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      🛡️
                    </motion.span>
                  </motion.div>
                </div>
                <span className="text-xs opacity-70">Coming soon. Battle your friends!</span>
              </div>
            </motion.button>

            <motion.button
              onClick={() => router.push('/leaderboard')}
              className="game-btn bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600"
              whileTap={{ scale: 0.95, y: 4 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-transparent"
                initial={false}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative flex items-center justify-center gap-2">
                <span>LEADERBOARD</span>
                <motion.div className="flex items-center gap-1">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🏆
                  </motion.span>
                  <motion.span
                    animate={{ scale: [1, 1.1, 1], y: [0, -1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  >
                    ✨
                  </motion.span>
                </motion.div>
              </div>
            </motion.button>
          </div>

          {/* High Score Card */}
          <motion.div
            className="mt-8 bg-white border-2 border-black rounded-none p-4 w-full max-w-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-black mb-3 flex items-center justify-center gap-2">
                HIGHEST SCORE
                <motion.span
                  animate={{ scale: [1, 1.2, 1], rotate: [-5, 5, -5, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌟
                </motion.span>
              </h3>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gray-100 border-2 border-black rounded-none overflow-hidden">
                  {user?.photoURL ? (
                    <Image src={user.photoURL} alt="Profile" width={40} height={40} />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-600 text-xl">👤</span>
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">{user?.displayName || '@anonymous'}</p>
                  <p className="text-xl font-bold text-green-500 flex items-center gap-1">
                    +10,250
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      💰
                    </motion.span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <style>{`
          .game-btn {
            position: relative;
            width: 100%;
            padding: 1rem;
            border: 2px solid black;
            color: black;
            font-weight: bold;
            font-size: 1.125rem;
            text-align: center;
            overflow: hidden;
            transition: all 0.2s;
            transform-origin: center bottom;
            box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
          }

          .game-btn:hover {
            transform: translateY(-2px);
          }

          .game-btn:active {
            transform: translateY(2px);
            box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
          }
        `}</style>
      </main>
    </PageTransition>
  );
}
