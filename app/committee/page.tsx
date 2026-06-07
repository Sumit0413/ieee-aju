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
    name: "Dr. Chenraj Roychand",
    role: "Chief Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Prof. (Dr.) Easwaran S. Iyer",
    role: "Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Amit Kumar Shrivastav",
    role: "Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Angad Tiwari",
    role: "Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Jasbir Singh Dhanjal",
    role: "Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Arvind Kumar Pandey",
    role: "Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Ashwini Kumar",
    role: "Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Mrs. Richa Garg",
    role: "Co-Patron",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Prof. Dr. Sanjeevikumar Padmanaban",
    role: "Honorary Chair",
    affiliation: "University of South-Eastern Norway",
  },
  {
    name: "Prof. Ashok Kumar Pradhan",
    role: "Honorary Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Prof. Sanjib Kumar Panda",
    role: "Honorary Chair",
    affiliation: "National University of Singapore, Singapore",
  },
  {
    name: "Dr. Aditya Prasad Padhy",
    role: "General Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Ashwini Kumar",
    role: "Finance Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Premnath Suman",
    role: "Finance Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Priyatosh Mahish",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT Dhanbad",
  },
  {
    name: "Dr. Sibarama Panigrahi",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Rourkela",
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
    name: "Dr. Vinay Pratap Singh",
    role: "Technical Programme Committee Chair",
    affiliation: "MNIT, Jaipur",
  },
  {
    name: "Dr. Deepak Reddy Pullaguram",
    role: "Technical Programme Committee Chair",
    affiliation: "IIT, Kharagpur",
  },
  {
    name: "Dr. Varsha Singh",
    role: "Technical Programme Committee Chair",
    affiliation: "NIT, Raipur",
  },
  {
    name: "Dr. Tridibesh Nag",
    role: "Technical Programme Committee Chair",
    affiliation: "IEEE Kolkata Section",
  },
  {
    name: "Dr. Susanta Ray",
    role: "Technical Programme Committee Chair",
    affiliation: "IEEE Kolkata Section",
  },
  {
    name: "Dr. Shailesh Kumar",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Premnath Suman",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Kasinath Jena",
    role: "Technical Programme Committee Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Amit Prakash Sen",
    role: "Publication Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Md Irfan Ahmed",
    role: "Publication Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Binod Kumar Choudhary",
    role: "Publication Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Nidhi Dua",
    role: "Publication Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Viranshu Kumar",
    role: "Publication Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Susmita Kar",
    role: "Women in Engineering (WIE) Chair",
    affiliation: "NIT, Rourkela",
  },
  {
    name: "Dr. Keerti Rai",
    role: "Women in Engineering (WIE) Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Anupam Kumari",
    role: "Women in Engineering (WIE) Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Prof. Taniya Ghosh",
    role: "Women in Engineering (WIE) Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Prof. Jonaki Mukharjee",
    role: "Hospitality and Logistics Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Prof. Sarita Srivastav",
    role: "Hospitality and Logistics Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Prof. Manjur Ansari",
    role: "Hospitality and Logistics Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Viranshu Kumar",
    role: "Student Activity and Awards Chair",
    affiliation: "AJU, Jharkhand, India",
  },
  {
    name: "Dr. Md Irfan Ahmed",
    role: "Student Activity and Awards Chair",
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
