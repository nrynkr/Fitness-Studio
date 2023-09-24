import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import image from "../../assets/karthik.jpeg"
const About = () => {
  return (
    <div className="bg-white">
      <img
        src="https://i.ibb.co/tzWX2sk/people-doing-cardio-exercises-weight-lifting-yoga-gym-179970-169.png"
        alt="Page pic"
        className="w-full imageControl"
      />
      <h2 className="text-2xl font-semibold mt-8 mx-4 text-center">
        These services are offered by us.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
        <ServiceCard
          image="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJhcGp3dzE2NGxqZ250bXpiYW5pYjYxdjIyeGkwc253YXBlbzM4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/loG7TbqLitOPTVfg3o/giphy.gif"
          title="YOGA"
          description="Yoga, an ancient practice rooted in India, unites body, mind, and soul. Through physical postures (asanas), controlled breathing (pranayama), and meditation, it fosters holistic well-being. "
          link="/services/yoga/Yoga"
        />
        <ServiceCard
          image="https://media1.giphy.com/media/M3Eo2YJJ04twADD8Bg/giphy.gif?cid=6c09b9526kvpl5nypba51xu1ey5sb83f6rjedo7p0vgxzmgw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          title="ZUMBA"
          description="Zumba, a dynamic and exhilarating fitness phenomenon, infuses dance with exercise to create a unique and enjoyable workout experience."
          link="/services/zumba/Zumba"
        />
        <ServiceCard
          image="https://i.gifer.com/Ixpk.gif"
          title="PILATES"
          description='Pilates exercises primarily target the deep muscles of the abdomen, back, and pelvis, known as the "powerhouse." '
          link="/services/pilates/Pilates"
        />
        <ServiceCard
          image="https://media2.giphy.com/media/Yl5VGKskuiKrv6R2pN/giphy.gif"
          title="MEDITATION"
          description="Meditation, a timeless practice with roots in ancient traditions such as Buddhism, Hinduism, and Taoism, is a technique that cultivates mindfulness, self-awareness, and inner tranquility. "
          link="/services/meditation/Meditation"
        />
        {/* <ServiceCard
          image="https://media4.giphy.com/media/4bjIKBOWUnVPICCzJc/giphy.gif?cid=6c09b952dxg7560f7rwlfpowfjg4pe8cl0uybn8mh3xejz90&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          title="NUTRITION"
          description="Nutrition, the fundamental aspect of human well-being, revolves around the intake of nutrients from food and its impact on our health. It plays a vital role in maintaining bodily functions, supporting growth, and preventing various diseases. "
          link="/services/nutrition/Nutrition"
        /> */}
        {/* <ServiceCard
          image="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm1ncDQzZXpmb2xiNHZueDA3ZGoyem85MW13Y3d6b3lpMnF4aXY2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GZbgYa0mVQoBKrnuYT/giphy.gif"
          title="ENROLL NOW"
          description="Are you ready to embark on a journey of health, strength, and transformation? Look no further � our Fitness Studio is here to guide you towards your wellness goals."
          link="/enroll"
  /> */}
      </div>

      {/* this is import from whychoose.jsx */}

      <h2 className="text-2xl font-semibold mt-8 mx-4 text-center">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-3">
        <SocialProfileCard
          image={image}
          name="Karthik Prabhu"
          designation="Full Stack Developer (MERN)"
          link="https://github.com/KarthikPrabhu2541"
        />
        <SocialProfileCard
          image="https://media.licdn.com/dms/image/D5603AQHvNlzewTI6fw/profile-displayphoto-shrink_800_800/0/1689068041828?e=1700697600&v=beta&t=4VkjeScSpXclZ5ym3cXkf0sbPQPMJ-6ngi9xf2UrUKo"
          name="Lakshmi Narayana"
          designation="Full Stack Developer (MERN)"
          link="https://github.com/nrynkr"
        />
        <SocialProfileCard
          image="https://media.licdn.com/dms/image/D5603AQEu-oJl_lFBEg/profile-displayphoto-shrink_800_800/0/1689514212964?e=1700697600&v=beta&t=7-RlwRuKlLazp7_V8ZGOi6Xn9lnWiekiWUEFU49fkeA"
          name="Prajwal N"
          designation="Full Stack Developer (MERN)"
          link="https://github.com/prajwalnaveeenn"
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-gray-100 p-4 serviceContainer">
      <img src={image} alt={title} className="w-full servicesIMG" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
      <Link to={link} className="text-blue-500 hover:underline mt-4">
        Know More
      </Link>
    </div>
  );
};

const SocialProfileCard = ({ image, name, designation, link }) => {
  return (
    <div className="bg-white p-4 text-center">
      <img src={image} alt={name} className="w-full rounded-full profileIMG" />
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-gray-500">{designation}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-500 hover:underline mt-4"
      >
        Go to Profile
      </a>
    </div>
  );
};

export default About;