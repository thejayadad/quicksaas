
import { auth } from "@/auth";
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2023-10-16',
});


//First create a customer if there isnt one
export async function createCustomerIfNull() {
    try {
        const session = await auth()

        if (session) {
            const user = await prisma.user.findFirst({ where: { email: session.user?.email } });

            if (!user?.stripe_customer_id) {
                const customer = await stripe.customers.create({
                    email: String(user?.email),
                });

                await prisma.user.update({
                    where: {
                        id: user?.id,
                    },
                    data: {
                        stripe_customer_id: customer.id,
                    },
                });
            }

            const user2 = await prisma.user.findFirst({ where: { email: session.user?.email } });
            return user2?.stripe_customer_id;
        }
    } catch (error) {
        console.error('Error creating customer:', error);
        return undefined;
    }
}

//Generate the customer portal
export async function generateCustomerPortalLink(customerId) {
    try {
        if (!customerId) {
            console.error('Customer ID is undefined or null.');
            return undefined;
        }

        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: process.env.REDIRECT_AUTH_URL + '/dashboard',
        });

        return portalSession.url;
    } catch (error) {
        console.error('Error generating customer portal link:', error);
        return undefined;
    }
}

//Check if the user has a subscription
export async function hasSubscription() {
    try {
        const session = await auth()

        if (session) {
            const user = await prisma.user.findFirst({ where: { email: session.user?.email } });

            const subscriptions = await stripe.subscriptions.list({
                customer: String(user?.stripe_customer_id),
            });

            return subscriptions.data.length > 0;
        }

        return false;
    } catch (error) {
        console.error('Error checking subscription:', error);
        return false;
    }
}

//Create the checkout link
export async function createCheckoutLink(customer) {
    const checkout = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/dashboard/success",
        cancel_url: "http://localhost:3000/dashboard",
        customer: customer,
        line_items: [
            {
                price: 'price_1PLBIxGRd5uFn4Dnua9IgdCY',
                quantity: 1,
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}