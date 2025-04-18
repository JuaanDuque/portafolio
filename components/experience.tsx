import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";

const Experience = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
            <Title title="Experiencia" subtitle="Skills que tengo" />

            <div className="gap-8 mt-5">
                {dataExperience.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl"></h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.experience.map((item) => (
                                <div key={item.name} className="my-4">
                                    <p className="flex gap-2 mb-2">
                                        <BadgeCheck />{item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Experience;