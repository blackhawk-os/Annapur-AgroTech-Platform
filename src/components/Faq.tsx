"use client";
import React from 'react';
import { FAQCard }  from './Faqcard';
import  Button  from './HeaderText';

const faqItems = [
  {
    question: "How do I register as a Farmer or a Buyer?",
    answer: "You can register using your phone number or email, and choose whether you want to buy or sell during the signup process."
  },

  {
    question: "How can I trust the quality of the products?",
    answer: "We encourage farmers to upload clear photos and descriptions. Buyers can also rate and review products to maintain quality standards."
  },

  {
    question: "What kind of products can be listed on Annapur?",
    answer: "Any agricultural products such as fruits, vegetables, grains, dairy items, or handmade local goods relevant to farming and rural produce."
  },

  {
    question: "How does the Bidding System Work?",
    answer: "Buyers can place bids on listed products. Farmers can then accept the highest or most suitable bid, giving them more control over pricing and fair returns."
  },

  {
    question: "Can Restaurants or WholeSalers also buy through the platfrom?",
    answer: "Yes. Annapur is open to all kinds of buyers-from households to hotels, restaurants, and wholesale retailers."
  },

];

export const Faq = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div>
        <Button 
        text="Have Questions?" 
        text2="Frequently Asked Questions" 
        className="mb-8" 
      />
    </div>
      <div className="flex flex-col">
        {faqItems.map((item, index) => (
          <FAQCard 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </section>
  );
};