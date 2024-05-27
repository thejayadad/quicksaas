import React from 'react'
import Box from '../_components/box'
import { auth } from '@/auth'
import { createCheckoutLink, createCustomerIfNull, generateCustomerPortalLink, hasSubscription } from '@/lib/billing'
import prisma from '@/lib/prisma'
import Link from 'next/link'

const DashboardPAge = async () => {
    const session = await auth()
    const user = session?.user

    if (!user) {
        redirect("/")
    }

    const userEmail = user.email

    //Customer a customer if null
    await createCustomerIfNull()

    // Fetch the user by email to get the user's ID
    const existingUser = await prisma.user.findUnique({
        where: { email: userEmail },
    });

    //Generate the customer link
    const manage_link = await generateCustomerPortalLink("" + existingUser?.stripe_customer_id)

    //Check if the user has a subscription
    const hasSub = await hasSubscription()

    //Create a link for the customer
    const checkout_link = await createCheckoutLink("" + existingUser?.stripe_customer_id)

    console.log("Email " + userEmail)

  return (
    <section>
      <Box>
        <div className='flex flex-col  w-full mb-20 items-center gap-2 text-md'>
          <div className='flex justify-between items-center w-full'>
            <Link href={"" + manage_link} className='hover:text-gray-500 cursor-pointer'>
              Manage Billing
            </Link>
            <div>
              {hasSub ? (
                <>
                  <div>
                    Subscribed
                  </div>
                 </>
              ) : (
                <div className='flex items-center space-x-4'>
                  <p>FREE PLAN</p>
                  <Link href={"" + checkout_link}>
                    Upgrade Here
                  </Link>
                </div>
              )}
            </div>
          </div>
              {hasSub ?
                <>
                <h1 className='text-center'>Daily Member Conent</h1>
                </>  
                :
                <>
                <div className='h-screen'>
                    <h1 className='text-center'>Consider Subscribing</h1>
                </div>
                </>
            }
        </div>
      </Box>
    </section>
  )
}

export default DashboardPAge