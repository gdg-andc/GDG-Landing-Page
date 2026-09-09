import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  color: string;
};

type TeamData = {
  [key: string]: TeamMember[];
};

export default function Team() {
  const [activeYear, setActiveYear] = useState("2025");

  const teamData: TeamData = {
    "2025": [
      {
        name: "Himanshu Yadav",
        role: "GDG on Campus Organiser",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773770729/himanshu_2_etkuab.jpg",
        color: "border-gray-300",
      },
       {
        name: "Ishitva Joshi",
        role: "Chief Technical Officer",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910846/Ishitva_Joshi_p1kejj_hvy2qi.jpg",
        color: "border-gray-300",
      },

      {
        name: "Anshuman Thakur",
        role: "Marketing Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910400/WhatsApp_Image_2026-03-07_at_11.51.45_PM_gvnmcb.jpg",
        color: "border-gray-300",
      },
      {
        name: "Mahi Jain",
        role: "PR Team Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910518/WhatsApp_Image_2026-03-07_at_11.51.41_PM_1_vlm3tm.jpg",
        color: "border-gray-300",
      },

      {
        name: "Subham Kumar Tiwari",
        role: "Editorial Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910971/SubhamKumar_dgsolk_pf3br7.jpg",
        color: "border-gray-300",
      },
       
      {
        name: "Pranav",
        role: "Web Dev Team Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910582/WhatsApp_Image_2026-03-07_at_11.51.45_PM_1_j0utwf.jpg",
        color: "border-gray-300",
      },

       {
        name: "Abhijit Kumar",
        role: "Web Dev Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910583/WhatsApp_Image_2026-03-07_at_11.51.48_PM_b1pmxj.jpg",
        color: "border-gray-300",
      },
       {
        name: "Shubhi Srivastava",
        role: "Web Dev Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910580/WhatsApp_Image_2026-03-07_at_11.51.44_PM_2_yhor8n.jpg",
        color: "border-gray-300",
      },
        {
        name: "Adi Maqsood",
        role: "AI/ML Team Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.41_PM_dx55c5.jpg",
        color: "border-gray-300",
      },


      {
        name: "Ishan Srivastava",
        role: "AI/ML Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910252/WhatsApp_Image_2026-03-07_at_11.51.52_PM_2_gtpfbl.jpg",
        color: "border-gray-300",
      },
    

      {
        name: "Jayesh Raj Neti",
        role: "AI/ML Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.42_PM_1_lxmfnd.jpg",
        color: "border-gray-300",
      },
       
       {
        name: "Simran Bartwal",
        role: "AI/ML Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.47_PM_spe4ms.jpg",
        color: "border-gray-300",
      },
     
       
      {
        name: "Sanjay Sharma",
        role: "DSA Team Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910880/WhatsApp_Image_2026-03-07_at_11.51.53_PM_1_ikspjy.jpg",
        color: "border-gray-300",
      },

      {
        name: "Mo. Saif",
        role: "DSA Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910342/WhatsApp_Image_2026-03-07_at_11.51.48_PM_2_iaocta.jpg",
        color: "border-gray-300",
      },
      
     

       {
        name: "Srishti Singh",
        role: "Research and Content Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910537/WhatsApp_Image_2026-03-07_at_11.51.40_PM_swufxw.jpg",
        color: "border-gray-300",
      },
       {
        name: "Krishna Singh",
        role: "Research and Content Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772911025/WhatsApp_Image_2026-03-07_at_11.51.52_PM_1_wkuhxj.jpg",
        color: "border-gray-300",
      },

      
       {
        name: "Ariba",
        role: "Anchoring Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910286/WhatsApp_Image_2026-03-07_at_11.51.52_PM_zeirwo.jpg",
        color: "border-gray-300",
      },
       {
        name: "Vidhushi",
        role: "Anchoring Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910905/WhatsApp_Image_2026-03-07_at_11.51.53_PM_pptwvx.jpg",
        color: "border-gray-300",
      },
       {
        name: "Aditya Kumar Chaudhary",
        role: "Anchoring Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910284/WhatsApp_Image_2026-03-07_at_11.51.44_PM_i0rdux.jpg",
        color: "border-gray-300",
      },
       
      {
        name: "Utsav Pachauri",
        role: "Graphics & Media Team Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910363/WhatsApp_Image_2026-03-07_at_11.51.48_PM_1_bdlz2i.jpg",
        color: "border-gray-300",
      },
      {
        name: "Sapna Kumari",
        role: "Graphics & Media Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910361/WhatsApp_Image_2026-03-07_at_11.51.41_PM_2_qkmwgx.jpg",
        color: "border-gray-300",
      },
      
      {
        name: "Pratik Jain",
        role: "PR Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910518/WhatsApp_Image_2026-03-07_at_11.51.40_PM_1_zewlbc.jpg",
        color: "border-gray-300",
      },
      {
        name: "Piyush Kulshrestha",
        role: "PR Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910964/WhatsApp_Image_2026-03-07_at_11.51.51_PM_lyttxa.jpg",
        color: "border-gray-300",
      },

       {
        name: "Utkarsh Shekhar",
        role: "Operation Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910466/WhatsApp_Image_2026-03-07_at_11.51.42_PM_fevlpe.jpg",
        color: "border-gray-300",
      },
       {
        name: "Mushkan Deswal",
        role: "Operation Team",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910466/WhatsApp_Image_2026-03-07_at_11.51.44_PM_1_uhwjrm.jpg",
        color: "border-gray-300",
      },
      
       
    ],
    "2024": [
      {
        name: "Latika Joshi",
        role: "GDG on campus-ANDC Lead",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769517/Latika_1_1_tl38vf_qt7uj2.png",
        color: "border-blue-500",
      },
      {
        name: "Madhav Gaba",
        role: "Chief Technical Officer",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769425/madhav_hawzyd_jojice.jpg",
        color: "border-green-500",
      },
      {
        name: "Abhishek Kumar",
        role: "Cloud and Cybersecurity Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769592/abhishek_rpxpcl_phocxm.jpg",
        color: "border-yellow-500",
      },
      {
        name: "Harshit Raizada",
        role: "Web Development Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769811/HarshitRaizada-WebDev_ingboa_dqv1j1.jpg",
        color: "border-red-500",
      },
      {
        name: "Ishitva Joshi",
        role: "Tech Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769982/Ishitva_Joshi_p1kejj_gveglm.jpg",
        color: "border-blue-500",
      },
      {
        name: "Swastika Tiwari",
        role: "PR Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773770039/swastika_xg7zwn_sscrxa.jpg",
        color: "border-green-500",
      },
      {
        name: "Aditya Maurya",
        role: "Graphics Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773770078/Aditya_Maurya_graphics_head_lashnq_pmytjk.jpg",
        color: "border-yellow-500",
      },
      {
        name: "Naman Thakur",
        role: "Marketing Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773770117/Naman_cbomgr_fbiuq5.jpg",
        color: "border-red-500",
      },
      {
        name: "Adi Maqsood",
        role: "Cloud and Cybersecurity Core Team Member",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769600/adi_cs_i6ifrv_xnvokw.jpg",
        color: "border-blue-500",
      },
      {
        name: "Himanshu Yadav",
        role: "Cloud and Cybersecurity Core Team Member",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769737/himanshu_cs_2nd_year_rasebj_rjcxha.jpg",
        color: "border-green-500",
      },
      {
        name: "Mayank Kumar",
        role: "Web Development Core Team Member",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769915/Mayank_Kumar_WebDev_1_ssm1zw_dbjugv.png",
        color: "border-yellow-500",
      },
      {
        name: "Suhani Mishra",
        role: "Web Development Core Team Member",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773769862/suhani_upti3r_p6cuvf.jpg",
        color: "border-red-500",
      },
      {
        name: "Reene Bisht",
        role: "Editorial Co-Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773770243/Reene_Bisht_xw1iz6_vope2h.jpg",
        color: "border-blue-500",
      },
      {
        name: "Subham Tiwari",
        role: "Editorial Co-Head",
        image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773770270/SubhamKumar_dgsolk_vpmdnk.jpg",
        color: "border-green-500",
      },
    ],  
  };

  const years = Object.keys(teamData).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Meet the Core Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a passionate group of student developers and technologists
            dedicated to learning, sharing, and building together.
          </p>
        </div>

        {/* Year Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeYear === year
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {activeYear === year && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Team {year}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamData[activeYear].map((member, index) => (
              <motion.div
                key={`${activeYear}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group"
              >
                <div className="relative inline-block mb-4">
                  <div
                    className={`w-32 h-32 rounded-2xl overflow-hidden border-4 ${member.color} p-1`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-4">
                  {member.role}
                </p>

                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/gdg-on-campus-andc-7062b0334?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/gdg-andc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/gdg_andc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-full transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
