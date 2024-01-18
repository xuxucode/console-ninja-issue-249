'use client'; // make sure client component

export default function Home() {
  return (
    <div>Hello</div>
  )
}

// A class with two private methods which have same names. The only difference
// is one of them begins with a underscore.
class Client {
  #privateMethod() { }

  #_privateMethod() { }
}
