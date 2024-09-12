export function RecentActivity() {
  const activities = [
    { id: 1, user: 'John Doe', action: 'created a new project', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'completed a task', time: '4 hours ago' },
    { id: 3, user: 'Bob Johnson', action: 'uploaded a document', time: 'Yesterday' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">{activity.user}</span> {activity.action}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}