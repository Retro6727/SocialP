import React, { useState } from 'react'

const Groups = () => {
    const [showModal, setShowModal] = useState(false);
            const [groupName, setGroupName] = useState("");
            const [groupMembers, setGroupMembers] = useState([]);
            const [groups, setGroups] = useState([
                { name: "Group 1", members: ["Alice", "Bob"] },
                { name: "Group 2", members: ["Charlie"] },
                { name: "Group 3", members: ["David", "Eve"] }
            ]);
            // Mock friends list
            const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];

            const handleSubmit = (e) => {
                e.preventDefault();
                // Add new group to groups list
                setGroups([
                    ...groups,
                    { name: groupName, members: groupMembers }
                ]);
                setShowModal(false);
                setGroupName("");
                setGroupMembers([]);
            };

        // Drag and drop logic
        const handleDragStart = (friend) => {
            window.draggedFriend = friend;
        };
        const handleDrop = (e) => {
            e.preventDefault();
            const friend = window.draggedFriend;
            if (friend && !groupMembers.includes(friend)) {
                setGroupMembers([...groupMembers, friend]);
            }
            window.draggedFriend = null;
        };
        const handleDragOver = (e) => {
            e.preventDefault();
        };
        const removeMember = (friend) => {
            setGroupMembers(groupMembers.filter(f => f !== friend));
        };

    return (
        <div>
            <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Groups</h1>
            <p className='text-left mb-4'>Explore and join various groups of interest.</p>
                    <div className='max-w-5xl mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold mb-4'>Available Groups</h2>
                        <ul className='list-disc pl-5'>
                            {groups.length === 0 && <li className='mb-2 text-gray-400'>No groups available</li>}
                            {groups.map((group, idx) => (
                                <li key={idx} className='mb-2'>
                                    <span className='font-bold'>{group.name}</span>
                                    {group.members && group.members.length > 0 && (
                                        <span className='ml-2 text-sm text-gray-600'>({group.members.length} participants: {group.members.join(", ")})</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
            <div className='max-w-5xl mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold mb-4'>Create a New Group</h2>
                <button onClick={() => setShowModal(true)} className='bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-2 w-full mt-2 rounded-lg shadow transition'>Create Group</button>
            </div>
                    {showModal && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000
                        }}>
                            <div style={{
                                background: '#fff',
                                padding: '32px',
                                borderRadius: '8px',
                                minWidth: '340px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}>
                                <h3 className='text-xl font-bold mb-4'>Create a New Group</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Group Name:</label>
                                        <input type="text" value={groupName} onChange={e => setGroupName(e.target.value)} required className='border border-gray-300 p-2 w-full rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Add People:</label>
                                        <div className='flex gap-2 items-center'>
                                            <span className='material-icons' style={{cursor: 'pointer'}}>add</span>
                                            <span className='text-gray-500'>Drag friends below into group</span>
                                        </div>
                                        <div className='flex gap-2 mt-2'>
                                            {friends.map(friend => (
                                                <div
                                                    key={friend}
                                                    draggable
                                                    onDragStart={() => handleDragStart(friend)}
                                                    className='px-3 py-1 bg-blue-100 rounded cursor-move border border-blue-300 hover:bg-blue-200'
                                                    style={{userSelect: 'none'}}
                                                >{friend}</div>
                                            ))}
                                        </div>
                                        <div
                                            className='mt-4 p-2 border border-green-400 rounded min-h-[40px] bg-green-50'
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            style={{marginTop: '12px'}}
                                        >
                                            <span className='font-semibold'>Group Members:</span>
                                            <div className='flex gap-2 mt-2 flex-wrap'>
                                                {groupMembers.length === 0 && <span className='text-gray-400'>Drop friends here</span>}
                                                {groupMembers.map(friend => (
                                                    <div key={friend} className='px-3 py-1 bg-green-200 rounded flex items-center gap-1'>
                                                        {friend}
                                                        <button type='button' onClick={() => removeMember(friend)} className='text-red-500 ml-1' title='Remove'>×</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-1'>Number of Participants:</label>
                                        <div className='border border-gray-300 p-2 w-full rounded bg-gray-100'>{groupMembers.length}</div>
                                    </div>
                                    <div className='flex justify-end gap-2'>
                                        <button type="button" onClick={() => setShowModal(false)} className='px-4 py-2 rounded bg-gray-300 hover:bg-gray-400'>Cancel</button>
                                        <button type="submit" className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600'>Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
        </div>
    );
}

export default Groups