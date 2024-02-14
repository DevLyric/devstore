import profilePhoto from '../assets/Ellipse 1.png'

export function Profile() {
  return (
    <div className="flex items-center gap-4">
      <p>Account</p>

      <img src={profilePhoto} alt="profilePhoto" />
    </div>
  )
}
