import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>


                A functional and logic programming language inspired by Scala, OCaml, and Datalog.

                <div>
                    <div class="panel panel-info">
                        <div class="panel-heading"> Recent News</div>
                        <div class="panel-body">
                            <ul>
                                <li>
                                    2018-05-01 The paper <a href="https://flix.github.io/pub/cc2018/paper.pdf">Tail Call
                                    Elimination and Data Representation for Functional Languages on the Java Virtual
                                    Machine
                                </a> is now available!
                                </li>
                                <li>
                                    2017-10-11 Flix <a href="https://github.com/flix/flix/releases/tag/v0.2">version
                                    0.2</a> is
                                    now available!
                                </li>
                                <li>
                                    2017-04-18 Flix <a href="https://github.com/flix/flix/releases/tag/v0.1">version
                                    0.1</a> is
                                    now available!
                                </li>
                                <li>2016-09-25 Ming-Ho Yee's master thesis <a
                                    href="https://flix.github.io/pub/theses/ming-ho-yee.pdf">
                                    Implementing a Functional Language for Flix
                                </a> is now available.
                                </li>
                                <li>2016-09-13 The extended abstract
                                    <a href="https://flix.github.io/pub/tapas2016/abstract.pdf">
                                        Programming a Dataflow Analysis in Flix
                                    </a>
                                    from <a href="http://staticanalysis.org/tapas2016/">TAPAS 2016</a> is now available.
                                </li>
                                <li>2016-07-14 The poster <a href="https://flix.github.io/pub/ecoop2016/poster.pdf">
                                    Flix and its Implementation: A Language for Static Analysis</a> from ECOOP 2016
                                    is now available!
                                </li>
                                <li>2016-07-14 The <a href="https://www.youtube.com/watch?v=9EC8gnKIUII">video</a> from
                                    PLDI 2016 is now online!
                                </li>
                                <li>2016-06-20 The <a
                                    href="https://flix.github.io/pub/pldi2016/slides.pdf">slides</a> from
                                    the presentation at PLDI 2016 are now available!
                                </li>
                                <li>2016-06-10 The first preview version of Flix is now available!
                                </li>
                                <li>2016-06-10 The paper <a href="https://flix.github.io/pub/pldi2016/paper.pdf">From
                                    Datalog to
                                    Flix: A Declarative Language for Fixed
                                    Points on Lattices</a> is now available.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                At a glance

                Flix is a statically typed functional- and logic programming language inspired by Scala, OCaml, F#,
                Haskell, and Datalog. The syntax of Flix resembles Scala and Datalog. The type system supports local
                type inference and is based on Hindley-Milner. Flix runs on the Java Virtual Machine and compiles
                directly to JVM bytecode. Flix supports hybrid functional and logic programming featuring a built-in
                fixed point engine based on semi-naive evaluation. The functional and logic languages can be used
                independently, if so desired. For example, a Flix program can be purely functional, or Flix can be used
                as a standalone Datalog engine.


                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Languages Features</h3>
                            <ul>
                                <li><h4>Functional and Declarative</h4></li>
                                <li><h4>Algebraic Data Types</h4></li>
                                <li><h4>Pattern Matching</h4></li>
                                <li><h4>Namespaces</h4></li>
                                <li><h4>Parallel Rule Evaluation</h4></li>
                                <li><h4>Tail recursion optimization</h4></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h3>Additional Features</h3>
                            <ul>
                                <li><h4>Datalog Support</h4></li>
                                <li><h4>Stratified Negation</h4></li>
                                <li><h4>Standard Library</h4></li>
                                <li><h4>Static Type System</h4></li>
                                <li><h4>Formal Semantics</h4></li>
                                <li><h4>Scala and Prolog-style Syntax</h4></li>
                                <li><h4>Free &amp; Open Source</h4></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h3>Tools &amp; Ecosystem</h3>
                            <ul>
                                <li><h4>Integrated browser-based Debugger and Profiler</h4></li>
                                <li><h4>Built-in Delta Debugger</h4></li>
                                <li><h4>Built-in QuickChecker</h4></li>
                                <li><h4>Built-in Static Program Verifier</h4></li>
                                <li><h4>Runs on the Java Virtual Machine</h4></li>
                                <li><h4>Tutorials &amp; Documentation</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>

                We kindly thank EJ Technologies for providing us with JProfiler and JetBrains for providing us with
                IntelliJ IDEA.

            </div>
        );
    }
}

export default Home;
