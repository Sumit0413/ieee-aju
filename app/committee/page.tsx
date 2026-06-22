import SectionHeading from "../components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committee | JHICON-2027",
  description: "Organizing committee details for JHICON-2027 at AJU, Jharkhand, India.",
};

interface CommitteeMember {
  name: string;
  affiliation: string;
  role?: string;
}

const organizingCommittee: CommitteeMember[] = [
  {
    name: "Prof. (Dr.) Easwaran S. Iyer",
    role: "Chief Patron",
    affiliation: "Vice-Chancellor, AJU, Jharkhand",
  },
  {
    name: "Dr. Amit Kumar Shrivastav",
    role: "Patron",
    affiliation: "Registrar, AJU, Jharkhand",
  },
  {
    name: "Prof. (Dr.) Angad Tiwari",
    role: "Patron",
    affiliation: "Pro-Vice Chancellor, AJU, Jharkhand",
  },
  {
    name: "Prof. (Dr.) S. S Razi",
    role: "Patron",
    affiliation: "Chairperson, AJU, Jharkhand",
  },
  {
    name: "Mrs. Richa Garg",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
  },
  {
    name: "Dr. Jasbir Singh Dhanjal",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
  },
  {
    name: "Dr. Arvind Kumar Pandey",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
  },
  {
    name: "Dr. Ashwini Kumar",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand",
  },
  {
    name: "Prof. (Dr.) Narayana Prasad Padhy",
    role: "Honorary Chair",
    affiliation: "Director, MNIT, Jaipur",
  },
  {
    name: "Prof. (Dr.) Bidyadhar Subudhi",
    role: "Honorary Chair",
    affiliation: "Director, NIT, Warangal",
  },
  {
    name: "Prof. (Dr.) Ashok Kumar Pradhan",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Prof. (Dr.) Aurobinda Routray",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Prof. (Dr.) Bhim Singh",
    role: "Honorary Chair",
    affiliation: "ANRF National Science Chair, IIT, Delhi",
  },
  {
    name: "Prof. (Dr.) Sanjeev Padmanaban",
    role: "Honorary Chair",
    affiliation: "USN, Norway",
  },
  {
    name: "Prof. (Dr.) Chandan Chakraborty",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Prof. (Dr.) Xiaodong Liang",
    role: "Honorary Chair",
    affiliation: "University of Saskatchewan, Canada",
  },
  {
    name: "Prof. (Dr.) Brij Bhooshan Gupta",
    role: "Honorary Chair",
    affiliation: "Asia University, Taiwan",
  },
  {
    name: "Prof. (Dr.) Sidhartha Panda",
    role: "Honorary Chair",
    affiliation: "VSSUT, Burla",
  },
  {
    name: "Prof. (Dr.) Ajit Kumar Barisal",
    role: "Honorary Chair",
    affiliation: "OUTR, Bhubaneswar",
  },
  {
    name: "Prof. (Dr.) Chinmoy Panigrahi",
    role: "Honorary Chair",
    affiliation: "KIIT University, Bhubaneswar",
  },
  {
    name: "Dr. Aditya Prasad Padhy",
    role: "General Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Deepak Reddy Pullaguram",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Dr. Paresh Kumar Nayak",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT Dhanbad",
  },
  {
    name: "Dr. Dushyant Sharma",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Dhanbad",
  },
  {
    name: "Dr. Rabindra Mohanty",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Delhi",
  },
  {
    name: "Dr. Priyatosh Mahish",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT Dhanbad",
  },
  {
    name: "Dr. Ajit Kumar",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Dhanbad",
  },
  {
    name: "Dr. Vinay Pratap Singh",
    role: "Technical Programme Committee Chair",
    affiliation: "MNIT, Jaipur",
  },
  {
    name: "Dr. Swapnajit Pattnaik",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Monalisa Biswal",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Varsha Singh",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Veerpratap Meena",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Kumari Namrata",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Basudeba Behera",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Wesam Ahmed",
    role: "Technical Programme Committee Chair",
    affiliation: "Hurghada University, Egypt",
  },
  {
    name: "Dr. Dilip Kumar Mishra",
    role: "Technical Programme Committee Chair",
    affiliation: "Flinders University, Australia",
  },
  {
    name: "Dr. Trilocahan Panigrahi",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Goa",
  },
  {
    name: "Dr. Deepak Kumar Lal",
    role: "Technical Programme Committee Chair",
    affiliation: "VSSUT, Burla",
  },
  {
    name: "Dr. Suryaprakash",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Dinesh Kumar",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Kethavath Raghavendra Naik",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Jamshedpur",
  },
  {
    name: "Dr. Saumendra Sarangi",
    role: "Technical Programme Committee Chair",
    affiliation: "MNNIT, Prayagraj",
  },
  {
    name: "Dr. Tridibesh Nag",
    role: "Technical Programme Committee Chair",
    affiliation: "Vice Chair, IEEE Kolkata section",
  },
  {
    name: "Dr. Susanta Ray",
    role: "Technical Programme Committee Chair",
    affiliation: "Secretary, IEEE Kolkata section",
  },
  {
    name: "Dr. Pavan kumar Meena",
    role: "Technical Programme Committee Chair",
    affiliation: "GUT, Poland",
  },
  {
    name: "Dr. Krishna Kumar Gupta",
    role: "Technical Programme Committee Chair",
    affiliation: "Thapar University, Punjab",
  },
  {
    name: "Dr. Arghya Mitra",
    role: "Technical Programme Committee Chair",
    affiliation: "VNIT, Nagpur",
  },
  {
    name: "Dr. M Suresh",
    role: "Technical Programme Committee Chair",
    affiliation: "VIT, Bhopal",
  },
  {
    name: "Dr. Gesu Thakur",
    role: "Technical Programme Committee Chair",
    affiliation: "COER University, Roorkee",
  },
  {
    name: "Dr. Kasinath Jena",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Jonaki Mukharjee",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
];

function CommitteeTable({ title, members, showRole = false }: { title: string; members: CommitteeMember[]; showRole?: boolean }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-primary mb-4 border-l-4 border-accent pl-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-primary/5 border-b border-gray-200">
              <th className="px-4 py-3 font-semibold text-foreground">Name</th>
              {showRole && <th className="px-4 py-3 font-semibold text-foreground">Role</th>}
              <th className="px-4 py-3 font-semibold text-foreground">Affiliation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((m, index) => (
              <tr key={`${m.name}-${m.role ?? "member"}-${index}`} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{m.name}</td>
                {showRole && <td className="px-4 py-3 text-accent-dark font-medium">{m.role}</td>}
                <td className="px-4 py-3 text-gray-600">{m.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <>
      <section className="bg-linear-to-r from-primary to-primary-dark py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Committee</h1>
          <p className="mt-3 text-white/80 text-lg">Meet our distinguished organizing team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Organizing Committee" />
          <CommitteeTable title="Organizing Committee" members={organizingCommittee} showRole />
        </div>
      </section>
    </>
  );
}
