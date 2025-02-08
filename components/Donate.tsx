'use client'

import { Dialog, Transition } from '@headlessui/react'
import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Fragment, useState } from 'react'

export function Donate() {
  const [isOpen, setIsOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'wechat' | 'alipay'>('wechat')

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900'
      >
        <HeartIcon className='h-4 w-4' />
        <span>打赏</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[100]' onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/20 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-[360px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-center text-lg font-medium text-gray-900'>
                    感谢支持
                  </Dialog.Title>

                  <div className='mt-6 flex justify-center gap-4'>
                    <button
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        paymentMethod === 'wechat'
                          ? 'bg-green-500 text-white'
                          : 'text-green-500 hover:bg-green-50'
                      }`}
                      onClick={() => setPaymentMethod('wechat')}
                    >
                      微信支付
                    </button>
                    <button
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        paymentMethod === 'alipay'
                          ? 'bg-blue-500 text-white'
                          : 'text-blue-500 hover:bg-blue-50'
                      }`}
                      onClick={() => setPaymentMethod('alipay')}
                    >
                      支付宝
                    </button>
                  </div>

                  <div className='mt-6 flex justify-center'>
                    <div className='overflow-hidden rounded-lg bg-white p-2'>
                      <Image
                        src={
                          paymentMethod === 'wechat'
                            ? '/images/wechat-qr.jpg'
                            : '/images/alipay-qr.jpg'
                        }
                        alt={paymentMethod === 'wechat' ? 'WeChat Pay QR Code' : 'Alipay QR Code'}
                        width={240}
                        height={240}
                        className='h-52 w-52 object-contain transition-all duration-300'
                      />
                    </div>
                  </div>

                  <div className='mt-4'>
                    <p className='text-center text-sm text-gray-500'>感谢您的支持！</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
