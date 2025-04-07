export default function SkillsGrid(props) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {props.skills.map((skill) => (
        <li key={skill.name} className="col-span-1 divide-y divide-accent rounded-lg bg-gray-900 shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
              <span className={`inline-flex shrink-0 items-center rounded-full bg-bground px-1.5 py-0.5 text-xs font-medium ${skill.textColor} ring-1 ring-inset ${skill.ringColor}`}>
                  {skill.role}
                </span>
                <h3 className="truncate text-sm font-medium text-text">{skill.name}</h3>
              </div>
            </div>
            <div>{skill.icon}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
